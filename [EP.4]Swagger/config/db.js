const Sequelize = require("sequelize");

const sequelize = new Sequelize("test", "root", "", {
  host: "127.0.0.1",
  port: 3306,
  dialect: "mysql",
});

if (sequelize.authenticate()) {
  console.log("Connected ...");
}

module.exports = sequelize;
