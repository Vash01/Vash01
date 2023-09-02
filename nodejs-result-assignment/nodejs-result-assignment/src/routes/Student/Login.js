const express = require('express')
const StudentLoginRouter = express.Router()
const axios = require('axios')
const StudentController = require('../../../Controller/StudentController')


StudentLoginRouter.get('',StudentController.Login)

module.exports= StudentLoginRouter


