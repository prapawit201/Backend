var express = require('express');
var router = express.Router();
const monk = require('monk') //!import monk เพื่อเชื่อมระหว่าง mongoDB & NodeJS
const { check, validationResult } = require('express-validator');
const blogController = require('../controller/blog')
const userController = require('../controller/userController');
/* GET users listing. */

const db = require('monk')('localhost:27017/ToturialDB'); //! connect port DB in MongoDB

router.get('/', blogController.getIndex)

router.get('/add', function (req, res, next) {
  res.render("addblog")
});

router.get('/register', function (req, res, next) {
  res.render("addregister")
});

router.post('/add', [ //!เป็นการเช็คว่ามีการป้อนข้อมูลเข้ามาไหม
  check("name", "Please input your blog name").not().isEmpty(), //! check ว่าค่าว่างหรือป่าว
  check("description", "Please input your blog description").not().isEmpty(),
  check("author", "Please input your blog author").not().isEmpty()
],userController.postRegister)

module.exports = router;
