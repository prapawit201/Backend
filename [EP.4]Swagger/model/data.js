const Sequelize = require("sequelize");
const db = require("../config/db");

const data = db.define(
  "Data",
  {
    dataId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    dataName: {
      type: Sequelize.STRING,
    },
    dataValue: {
      type: Sequelize.STRING,
    },

    dataStatus: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
    dataDate: {
      type: Sequelize.STRING,
    },
    date: {
      type: Sequelize.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);
module.exports = data;
