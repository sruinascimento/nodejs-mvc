const express = require('express')
const router = express.Router()
const controllerGet = require('../controllers/UserController')

router.post('/user', controllerGet.post)

router.get('/user', controllerGet.get)

module.exports = router
