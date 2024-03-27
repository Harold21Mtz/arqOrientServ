# Primer Parcial 2023 Arquitectura Orientada a Servicios

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

<code>GET /auth/</code>
- Request
    - **username**:  requerido
    - **password**:  requerido
- Response
    - Código de estado HTTP 200 (OK) si las credenciales son correctas.
    - Código de estado HTTP 401 (Unauthorized) si las credenciales son incorrectas o el usuario no está autorizado.
    - Si las credenciales son correctas:
      - token: Token de autenticación generado para el usuario. }
      - success: Valor booleano indicando si el inicio de sesión fue exitoso. 
      - msg: Mensaje indicando que el inicio de sesión se realizó correctamente.

<code>GET /api/products/all</code>
- Request
    - No requiere parámetros adicionales.
- Response
    - Código de estado HTTP 200 (OK)
    - Respuesta JSON con todos los productos en la base de datos.

<code>GET /api/products/:id</code>
- Request
    - **params:**
        - **id**:  requerido
- Response
    - Código de estado HTTP 200 (OK) si el producto se encuentra.
    -  Código de estado HTTP 404 (Not Found) si el producto no se encuentra.
    -  Respuesta JSON con los detalles del producto encontrado.

<code>POST /api/product/</code>
- Request
    - **body:**
        - **name** :  requerido
        - **detail** : requerido
        - **value** :  requerido
        - **img**
- Response
    - Código de estado HTTP 201 (Created) si el producto se crea exitosamente.
    -  Código de estado HTTP 409 (Conflict) si ya existe un producto con el mismo nombre.
    -  Respuesta JSON con los detalles del producto creado.

<code>PUT /api/products/:id</code>
- Request
    - **body**
        - **id** :  requerido
        - **nombre**
        - **detalle**
        - **valor**
        - **img**
- Response
    - Código de estado HTTP 204 (No Content) si la actualización se realiza con éxito.
    -  Código de estado HTTP 404 (Not Found) si el producto no existe.
    -  Código de estado HTTP 409 (Conflict) si ya existe un producto con el mismo nombre después de la actualización.

<code>DELETE /api/products/:id</code>
- Request
    - **params:**
        - **id** : requerido
- Response
    - Código de estado HTTP 204 (No Content) si el producto se elimina correctamente.
    -  Código de estado HTTP 404 (Not Found) si el producto no existe.