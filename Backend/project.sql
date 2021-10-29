CREATE DATABASE project;
use project;

CREATE TABLE product (
product_id int not null auto_increment,
name varchar(255),
stock int,
price float,
category enum('SMARTPHONES','HOME','TOYS','FASHION','JEWELRY'),
created_date datetime,
modified_date datetime,
description text,
primary key (product_id)
);

CREATE TABLE client (
client_id int,
name varchar(255),
last_name varchar(255),
email varchar(255),
password varchar(255),
registered_at datetime,
primary key (client_id)
);
                      
CREATE TABLE log_in (
email varchar(255),
password varchar(255)
);

CREATE TABLE cart_items (
client_id int not null,
product_id int not null,
foreign key (client_id) references client(client_id),
foreign key (product_id) references product(product_id)
);
            
CREATE TABLE contact_us (
name varchar(255) not null,
email varchar(255),
issue text not null
);
