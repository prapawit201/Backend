const express = require("express");
const router = express.Router();

const dataController = require("../controllers/dataController");

router.get("/get/data", dataController.dataController);
router.get("/get/:dataId", dataController.get);
router.post("/create/data", dataController.create);
router.put("/update/data/:dataId", dataController.update);
router.delete("/delete/data/:dataId", dataController.delete);
module.exports = router;
