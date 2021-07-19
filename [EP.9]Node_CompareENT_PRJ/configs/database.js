const Sequelize = require('sequelize');

const sequelize = new Sequelize('nestdemo', 'babe', '2542', {
    host: '127.0.0.1',
    dialect: 'postgres',
    port: 5432,
    entities: ["dist/**/*.entity.js"],
    synchronize: true
  });

  module.exports = sequelize