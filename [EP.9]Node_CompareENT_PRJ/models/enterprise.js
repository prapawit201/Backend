const sequelize = require("../configs/database");
const Sequelize = require("sequelize");
const enterprise = sequelize.define(
  "enterprise",
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: Sequelize.STRING,
    },
    first_province: {
      type: Sequelize.STRING,
    },
    second_name: {
      type: Sequelize.STRING,
    },
    second_province: {
      type: Sequelize.STRING,
    },
  },
  {
    freezeTableName: true,
    // If don't want createdAt
    createdAt: false,

    // If don't want updatedAt
    updatedAt: false,
  }
);
module.exports = enterprise;
