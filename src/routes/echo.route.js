const express = require('express')
const router = express.Router();

const echoController = require('../controllers/echo.controller')

router.post('/',echoController.makeEcho);

module.exports = router;