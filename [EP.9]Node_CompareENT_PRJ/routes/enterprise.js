const express = require('express')
const router = express.Router()
const enterprise_controller = require('../controllers/enterpriseController')
router.post('/data',enterprise_controller.postDataEnterprise)
router.get('/data',enterprise_controller.getDataEnterprise)

module.exports = router