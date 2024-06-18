# Examen Final Arquitectura Orientada a Servicios

## Descripción

Servicio de API REST del primer parcial de la asignatura Arquitectura orientada a servicios (SOA), desarrollado con Node.js , Express y Postgresql.

Esta API permite obtener y almacenar información de productos varios, siempre y cuando el usuario este autenticado, registrando en una base de datos de posgrest. La API cuenta con las siguientes funciones:

- Autorización mediante Basic Auth
- Validación de parámetros de entrada
- Manejo de errores


## Instalación

### Clonar el repositorio:
```
    git clone https://github.com/Harold21Mtz/arqOrientServ.git
```

### Instalación Manual

```
    npm install
```

## Tabla de contenido

- [Caracteristicas](#Caracteristicas)
- [Comandos](#Comandos)
- [Variables de Entorno](#Variables-de-Entorno)
- [Estructura del Proyecto](#Estructura-del-Proyecto)
- [API Endpoints](#API-Endpoints)


## Característica
- Node js
- NPM

## Comandos
Run Local:
```
    npm run dev
```

## Variables de Entorno
```
###> CONFIG SERVER <####
PORT=8000
URL_SERVER=http:\\127.0.0.1:8000\
###> CONFIG SERVER <####

###> DB_CONNECTION ### 
DB_URL_PG = postgres://postgres:Harold123@localhost:5432/arqorientserv
###< CONFIGURE SERVER ###

###> SECRET_KEY ###
SECRET_KEY = Harold06
###< SECRET_KEY ###
```
## Conexión a la Base de Datos

### Conexión Local
Para conectar a la base de datos local, descomentar y modificar la línea correspondiente en las variables de entorno:

- Reemplazar 'postgres' por su username de la bd
- Reemplazar 'Harold123' por su password de la bd
- Reemplazar '5432' por su puerto designado para correr postgres, si no dejarlo igual
- Reemplazar 'arqorientserv' por el nombre de la bd que quiere que tenga, si no dejarlo igual

DB_URL_PG = postgres://postgres@localhost:5432/arqorientserv

### Conexión a la Base en la Nube
Para conectar a la base de datos en la nube, use la URL ya configurada en las variables de entorno:

DB_URL_PG = postgres://arqOriServ@ep-cool-salad-a4dovsne.us-east-1.aws.neon.tech/arqOriServ?sslmode=require

Tener en cuenta que las peticiones a la base de datos en la nube pueden ser un poco más lentas que a la local, dependiendo de la conexión a internet.

## Estructura del Proyecto

```
src\
 |--config\         # Variables de entorno y configuración 
 |--controllers\    # Controladores 
 |--middlewares\    # Middleware Personalizados
 |--models\         # Postgrest models (data layer) 
 |--routes\         # Rutas del sistema
 |--services\       # Servicios de conexión BD y Token 
 |--validator\      # Esquemas de validación
 |--index.js        # Express app
```


## API Endpoints

<code>POST /auth/login</code>
- Request
    - **username**: requerido
    - **password**: requerido
- Response
    - Código de estado HTTP 200 (OK) si las credenciales son correctas.
        - **token**: Token de autenticación generado para el usuario.
        - **success**: Valor booleano indicando si el inicio de sesión fue exitoso.
        - **msg**: Mensaje indicando que el inicio de sesión se realizó correctamente.
    - Código de estado HTTP 401 (Unauthorized) si las credenciales son incorrectas o el usuario no está autorizado.
        - **token**: Cadena vacía.
        - **success**: Valor booleano indicando que el inicio de sesión no fue exitoso.
        - **msg**: Mensaje de error.

<code>POST /auth/create</code>
- Request
    - **username**: requerido
    - **password**: requerido
    - **email**: requerido
    - **otherFields**: otros campos necesarios para la creación del usuario.
- Response
    - Código de estado HTTP correspondiente al resultado de la operación.
        - **data**: Datos del usuario creado o mensaje de error.

<code>POST /auth/email-exists</code>
- Request
    - **email**: requerido
- Response
    - Código de estado HTTP correspondiente al resultado de la operación.
        - **exists**: Valor booleano indicando si el email ya existe.
        - **msg**: Mensaje indicando el resultado de la operación.

<code>GET /auth/session</code>
- Request
    - **Authorization**: Cabecera con el token de autorización en formato Bearer.
- Response
    - Código de estado HTTP 200 (OK) si el token es válido.
        - **data**: Datos del usuario en sesión.
    - Código de estado HTTP 401 (Unauthorized) si el token es inválido o falta la autorización.
        - **message**: Mensaje de error indicando que la autorización es requerida.
    - Código de estado HTTP 500 (Internal Server Error) si hay un error procesando la solicitud.
        - **message**: Mensaje de error indicando que hubo un problema al procesar la solicitud.
          <code>GET /api/products</code>
- Request
    - No requiere parámetros.
- Response
    - Código de estado HTTP 200 (OK)
        - **data**: Lista de todos los productos.

<code>GET /api/categories-with-products</code>
- Request
    - No requiere parámetros.
- Response
    - Código de estado HTTP 200 (OK)
        - **data**: Lista de todas las categorías con sus productos asociados.

<code>GET /api/products/category/:id</code>
- Request
    - **params:**
        - **id**: ID de la categoría (requerido).
- Response
    - Código de estado HTTP 200 (OK)
        - **data**: Lista de productos pertenecientes a la categoría especificada.

<code>GET /api/categories</code>
- Request
    - No requiere parámetros.
- Response
    - Código de estado HTTP 200 (OK)
        - **data**: Lista de todas las categorías.

<code>GET /api/products/:id</code>
- Request
    - **params:**
        - **id**: ID del producto (requerido).
- Response
    - Código de estado HTTP correspondiente al resultado de la operación.
        - **data**: Detalles del producto encontrado.

<code>POST /api/products</code>
- Request
    - **body:**
        - **name**: Nombre del producto (requerido).
        - **detail**: Detalle del producto (requerido).
        - **value**: Valor del producto (requerido).
        - **img**: Imagen del producto (opcional).
- Response
    - Código de estado HTTP correspondiente al resultado de la operación.
        - **data**: Datos del producto creado o mensaje de error.

<code>PUT /api/products/:id</code>
- Request
    - **params:**
        - **id**: ID del producto (requerido).
    - **body:**
        - **name**: Nombre del producto (opcional).
        - **detail**: Detalle del producto (opcional).
        - **value**: Valor del producto (opcional).
        - **img**: Imagen del producto (opcional).
- Response
    - Código de estado HTTP correspondiente al resultado de la operación.
        - **data**: Datos del producto actualizado o mensaje de error.

<code>DELETE /api/products/:id</code>
- Request
    - **params:**
        - **id**: ID del producto (requerido).
- Response
    - Código de estado HTTP correspondiente al resultado de la operación.
        - **data**: Mensaje indicando si el producto fue eliminado o mensaje de error.
