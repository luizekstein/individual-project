create database League_Of_Legends;

use League_Of_Legends;

create table Usuarios(
	idUsuario int primary key not null auto_increment,
    email varchar (60), 
    nome varchar (80),
    dia varchar (2),
    mes varchar (10),
    ano varchar (4),
    login varchar (30),
    senha varchar (50),
    confirmarSenha varchar (50)
);

select * from Usuarios;




