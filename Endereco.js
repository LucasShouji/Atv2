const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize('sqlite::memory');

const User = sequelize.define(
    'User',
    {
        //Atributos da model são definidos aqui
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            //allowNull tem valor padrão true
        },
    },
    {
        //Outras opções podem ser inseridas aqui
        Id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Cep: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Logradouro: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Numero: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Complemento: {
            type: DataTypes.STRING,
        },
        Bairro: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Cidade: {
            type: DataTypes.String,
            allowNull: false,
        },
        Estado: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        MunicipioIBGE: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }
    
);
