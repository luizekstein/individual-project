create database League_Of_Legends;

use League_Of_Legends;

create table Usuarios(
	idUsuario int primary key auto_increment,
    email varchar (60), 
    nome varchar (80),
    dia varchar (2),
    mes varchar (10),
    ano varchar (4),
    login varchar (30),
    senha varchar (50)
);

drop table Usuarios;

select * from Usuarios;

delete from Usuarios where idusuario = ?;

select round(avg(DATEDIFF(date_format(now(),'%Y-%m-%d'), ano))/365,0) as Idade from Usuarios;




