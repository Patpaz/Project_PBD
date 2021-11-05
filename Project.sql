CREATE DATABASE project;
use project;

CREATE TABLE product (
product_id int not null auto_increment,
name varchar(255),
stock int,
price float,
category enum('SMARTPHONES','HOME','TOYS','FASHION','JEWELRY'),
description text,
created_date datetime,
modified_date datetime,
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

------------------------------------------------------------------------

insert into product (product_id, name, stock, price, category, description, created_date, modified_date)
values (1, 'Samsung Galaxy s10', 100, 500, 'SMARTPHONES', 'The Samsung Galaxy S10 has a 6.1-inch display. This display has QHD+ resolution. It also has an ultrasonic in-display fingerprint scanner. Powering the Galaxy S10 is the Samsung Exynos 9820 SoC this powerful SoC is paired with 8GB of RAM and 128GB of storage which makes it very easy for multitasking with this smartphone.', now(), now());

insert into product (name, stock, price, category, description, created_date, modified_date)
values ('Iphone 12 pro', 367, 600, 'SMARTPHONES', 'iPhone 12 Pro comes with a 6.10-inch touchscreen display with a resolution of 1170x2532 pixels at a pixel density of 460 pixels per inch (ppi). iPhone 12 Pro is powered by a hexa-core Apple A14 Bionic processor. The iPhone 12 Pro supports wireless charging.', now(), now());

insert into product (name, stock, price, category, description, created_date, modified_date)
values ('Superman Action Figure', 28, 20, 'TOYS', 'Incredibly detailed 7” scale figures based off the DC Multiverse, designed with Ultra Articulation with up to 22 moving parts for full range of posing and play. Superman is based on his look in the Justice League Movie and comes with flight stand and base', now(), now());
