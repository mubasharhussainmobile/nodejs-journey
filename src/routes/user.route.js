const express = require('express')
const router = express.Router()
const usersController = require('../controllers/users.controller')

// user routes
router.post('/',usersController.createUser)
router.get('/',usersController.getAllUsers)
router.get('/:id',usersController.getUserById)
router.delete('/:id',usersController.deleteUser)

module.exports = router