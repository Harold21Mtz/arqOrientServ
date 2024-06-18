 CREATE TABLE category (
     id_category serial,
     name varchar NOT NULL,
     description varchar,
     img varchar(4000),
     CONSTRAINT pk_id_category PRIMARY KEY (id_category)
 );

 CREATE TABLE product (
     id_product serial,
     name varchar,
     description varchar,
     price numeric,
     stock numeric,
     img varchar,
     category_id int,
     CONSTRAINT pk_id_product PRIMARY KEY (id_product),
     CONSTRAINT fk_category FOREIGN KEY (category_id) REFERENCES category(id_category)
 );

 CREATE TABLE usuario (
  id_user serial,
  username varchar,
  password varchar,
  email varchar,
  avatar varchar,
  CONSTRAINT pk_id_user primary key (id_user)
);

insert into usuario(username, password, email, avatar) values ('harold', 'Harold123', 'harold@gmail.com', 'https://cdn.pixabay.com/photo/2021/07/13/11/34/cat-6463284_640.jpg');
insert into usuario(username, password, email, avatar) values ('flor', 'Flor123', 'flor@gmail.com', 'https://estaticos-cdn.prensaiberica.es/clip/690a7c8f-559f-455f-b543-41a153fe8106_alta-libre-aspect-ratio_default_0.jpg');
insert into usuario(username, password, email, avatar) values ('melvin', 'Melvin123', 'melvin@gmail.com', 'https://www.educaciontrespuntocero.com/wp-content/uploads/2020/04/mejores-bancos-de-imagenes-gratis.jpg');

INSERT INTO category (name, description, img) VALUES
('Frutas', 'Variedad de frutas frescas y naturales', 'https://example.com/frutas.jpg'),
('Verduras', 'Hortalizas y verduras frescas', 'https://example.com/verduras.jpg'),
('Lácteos', 'Productos lácteos como leche, queso y yogur', 'https://example.com/lacteos.jpg'),
('Carnes', 'Carne de res, pollo, cerdo y más', 'https://example.com/carnes.jpg'),
('Granos y Cereales', 'Arroz, frijoles, lentejas y cereales', 'https://example.com/granos_cereales.jpg');

-- Frutas
INSERT INTO product (name, description, price, stock, img, category_id) VALUES
('Manzana', 'Manzanas frescas y jugosas', 1.20, 100, 'https://www.elsoldeparral.com.mx/incoming/ib879m-manzana.jpg/ALTERNATES/LANDSCAPE_1140/manzana.jpg', 1),
('Banana', 'Bananas maduras y dulces', 0.80, 120, 'https://media.ambito.com/p/bacb4018a1f40231823de22bee1eb40b/adjuntos/239/imagenes/039/800/0039800139/1200x675/smart/bananajpg.jpg', 1),
('Naranja', 'Naranjas ricas en vitamina C', 1.50, 90, 'https://cdn.pixabay.com/photo/2012/02/19/18/07/oranges-15047_640.jpg', 1),
('Pera', 'Peras tiernas y deliciosas', 1.30, 70, 'https://s1.elespanol.com/2021/04/12/ciencia/nutricion/573204669_177990449_1706x960.jpg', 1),
('Fresa', 'Fresas frescas y sabrosas', 2.00, 50, 'https://agrotendencia.tv/wp-content/uploads/2019/03/fresa4.jpg', 1);

-- Verduras
INSERT INTO product (name, description, price, stock, img, category_id) VALUES
('Lechuga', 'Lechuga fresca y crujiente', 1.00, 100, 'https://dfinnova.com/wp-content/themes/yootheme/cache/dc/lechugas-dc273b01.jpeg', 2),
('Tomate', 'Tomates rojos y jugosos', 1.20, 80, 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2024/03/07/17098165627875.jpg', 2),
('Zanahoria', 'Zanahorias naranjas y nutritivas', 0.90, 90, 'https://s1.elespanol.com/2019/10/04/ciencia/nutricion/verduras-frutas-nutricion_434216860_134609502_1706x960.jpg', 2),
('Brócoli', 'Brócoli verde y saludable', 1.50, 60, 'https://agrosemval.com/wp-content/uploads/2020/05/brocoli-calabrese-ipc-01.jpg', 2),
('Pepino', 'Pepinos frescos y crujientes', 1.10, 70, 'https://s1.elespanol.com/2020/11/12/ciencia/nutricion/pepino-vegetales-nutricion_535458333_164962473_1024x576.jpg', 2);

-- Lácteos
INSERT INTO product (name, description, price, stock, img, category_id) VALUES
('Leche', 'Leche fresca de vaca', 1.00, 200, 'https://www.lavanguardia.com/files/og_thumbnail/uploads/2018/11/05/5e996514f272d.jpeg', 3),
('Queso', 'Queso cheddar curado', 3.50, 50, 'https://cdn2.cocinadelirante.com/sites/default/files/images/2023/09/como-hacer-queso-con-1-litro-de-leche.jpg', 3),
('Yogur', 'Yogur natural sin azúcar', 1.20, 80, 'https://vitrina-emprendimiento-rural.aureliollano.org.co/wp-content/uploads/2023/03/producto-yogurt-litro-de-leche-de-cabra-El-cerrito-productos-lacteos.jpg', 3),
('Mantequilla', 'Mantequilla fresca y cremosa', 2.50, 60, 'https://imag.bonviveur.com/mantequilla-en-un-bol-de-cocina-lista-para-comer.jpg', 3);

-- Carnes
INSERT INTO product (name, description, price, stock, img, category_id) VALUES
('Carne de res', 'Carne de res de alta calidad', 10.00, 30, 'https://www.gob.mx/cms/uploads/article/main_image/37481/carne1.jpg', 4),
('Pollo', 'Pollo fresco y jugoso', 5.00, 40, 'https://i.blogs.es/8ceb02/pollo_entero/1366_2000.jpg', 4),
('Cerdo', 'Carne de cerdo tierna', 7.00, 35, 'https://comecarne.org/wp-content/uploads/2017/11/cosas-que-no-sabias-cerdo-700x300.jpg', 4);

-- Granos y Cereales
INSERT INTO product (name, description, price, stock, img, category_id) VALUES
('Arroz', 'Arroz blanco de grano largo', 1.00, 150, 'https://www.gob.mx/cms/uploads/article/main_image/39554/ARROZ_Y_EL_VALOR_AGREGADO.jpg', 5),
('Frijoles', 'Frijoles negros nutritivos', 1.50, 100, 'https://www.portafolio.co/files/article_new_multimedia/uploads/2017/11/26/5a1afa0f6e1c3.jpeg', 5),
('Lentejas', 'Lentejas verdes', 1.20, 80, 'https://www.gastronomiavasca.net/uploads/image/file/4295/lentejas.jpg', 5);

select * from product;
select * from usuario;