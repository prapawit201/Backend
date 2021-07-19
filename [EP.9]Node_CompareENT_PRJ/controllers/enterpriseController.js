const enterprise = require("../models/enterprise");

enterpriseController = {
  postDataEnterprise: async (req, res) => {
    console.log("get data")
    await enterprise
      .create({
        first_name: req.body.first_name,
        first_province: req.body.first_province,
        second_name: req.body.second_name,
        second_province: req.body.second_province,
      })
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
    res.status(201).json({
      status: 201,
      message: "Created success",
    });
  },
  getDataEnterprise: async (req, res) => {
    let data;
    await enterprise.findAll().then((result) => {
      let temp = JSON.parse(JSON.stringify(result[0]));
      data = {
        fisrt_enterprise: {
          enterprise: temp.first_name,
          province: temp.first_province,
        },
        second_enteprise: {
          enterprise: temp.second_name,
          province: temp.second_province,
        },
      };
    });
    res.status(200).json({
      status: 200,
      message: data,
    });
  },
};
module.exports = enterpriseController;
