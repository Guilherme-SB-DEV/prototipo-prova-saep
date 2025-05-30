const { DataTypes } = require('sequelize');
const sequelize = require('../conection');

// Definindo o modelo de usuário
const User = sequelize.define('User', {
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true,

    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,

    },



});
const Tarefa = sequelize.define('tarefa', {
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true,

    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    setor: {
        type: DataTypes.STRING,
        allowNull: false,

    },

    prioridade: {
        type: DataTypes.STRING,
        allowNull: false,

    },

    status: {
        type: DataTypes.STRING,
        allowNull: false,

    },

    
    fk_usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },






});


module.exports = { User, Tarefa };