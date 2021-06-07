	'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Usuario = sequelize.define('Usuario',{
		idUsuario: {
			field: 'idUsuario',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},	
		email: {
			field: 'email',
			type: DataTypes.STRING,
			allowNull: false
		},	
		nome: {
			field: 'nome',
			type: DataTypes.STRING,
			allowNull: false
		},
		dia: {
			field: 'dia',
			type: DataTypes.STRING,
			allowNull: false
		},
		mes: {
			field: 'mes',
			type: DataTypes.STRING,
			allowNull: false
		},
		ano: {
			field: 'ano',
			type: DataTypes.STRING,
			allowNull: false
		},
		login: {
			field: 'login',
			type: DataTypes.STRING,
			allowNull: false
		},
		senha: {
			field: 'senha',
			type: DataTypes.STRING,
			allowNull: false
		}
	}, 
	{
		tableName: 'Usuarios', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Usuario;
};
