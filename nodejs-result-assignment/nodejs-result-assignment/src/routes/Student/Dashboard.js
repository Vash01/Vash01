const express = require('express')
const StudentDashboardRouter = express.Router()
const userModel = require('../../../models/Student')
const StudentController = require('../../../Controller/StudentController')

StudentDashboardRouter.get('/:rollno',StudentController.StudentResult)

StudentDashboardRouter.post('', StudentController.StudentPostResult)
   

module.exports= StudentDashboardRouter
