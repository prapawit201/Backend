const db = require("../config/db");
const Data = require("../model/data");
const { QueryTypes } = require("sequelize");

const controllers = {};

controllers.delete = async (req, res) => {
  const { dataId } = req.params;
  console.log(dataId);
  const data = await Data.destroy({
    where: { dataId: dataId },
  });
  res.send({ status: true, delete: data, message: "deleted data success" });
};

controllers.dataController = async (req, res) => {
  const data = await db.query(`select * from data`, {
    type: QueryTypes.SELECT,
  });
  //frozen data in array
  const profile = [0, 1, 2];
  Object.freeze(profile);
  Object.isFrozen(profile);
  console.log(profile);
  profile[0] = 10;
  console.log(profile);

  res.send({ success: true, data: data });
};

controllers.update = async (req, res) => {
  const { dataId } = req.params;
  const { dataName, dataValue, dataDate, dataStatus, date } = req.body;
  const data = await Data.update(
    {
      dataName: dataName,
      dataValue: dataValue,
      dataDate: dataDate,
      dataStatus: dataStatus,
      date: date,
    },
    {
      where: { dataId: dataId },
    }
  );
  res.send({ success: true, data: req.body, message: "update success" });
};

controllers.get = async (req, res) => {
  const { dataId } = req.params;
  const data = await Data.findAll({
    where: { dataId: dataId },
  });
  res.send({ status: true, data: data });
};

controllers.create = async (req, res) => {
  // create
  const data = await Data.create({
    dataName: req.body.dataName,
    dataValue: req.body.dataValue,
    dataStatus: req.body.status,
    dataDate: "26/12/2563",
    date: "26/12/2563",
  })

    .then(function (data) {
      return data;
    })
    .catch(error => {
      console.log("Error " + error);
      return error;
    });
  // return res
  res.status(200).json({
    success: true,
    message: "Create Success",
    data: data,
  });
};

module.exports = controllers;
