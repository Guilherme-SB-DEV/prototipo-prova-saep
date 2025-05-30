const { Sequelize, DataTypes } = require('sequelize');

// Configuração da conexão com o banco de dados
const sequelize = new Sequelize("banco", "root", "3083", {
  host: 'localhost',
  dialect: 'mysql'
});


sequelize.sync({force:false})
.then(() => console.log('Banco de dados sincronizado'))
.catch(err => console.error('Erro ao sincronizar o banco de dados:', err.stack))


module.exports = sequelize;