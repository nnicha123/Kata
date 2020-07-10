const express = require('express')
const router = express.Router()
const informationController = require('../controller/information')

router.get('/',informationController.getInformation)
router.post('/',informationController.addInformation)

module.exports = router