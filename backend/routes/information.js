const express = require('express')
const router = express.Router()
const informationController = require('../controller/information')

router.get('/',informationController.getInformation)
router.post('/',informationController.addInformation)
router.get('/:date_of_birth',informationController.getBirthday)
module.exports = router