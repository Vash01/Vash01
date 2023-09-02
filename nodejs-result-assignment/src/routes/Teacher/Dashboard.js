const express = require('express')
const TeacherDashboardRouter = express.Router()
const axios = require('axios');
const bodyParser = require('body-parser')
const userModel = require('../../../models/Student')
const urlencodedParser = bodyParser.urlencoded({ extended: true })
const TeacherController = require('../../../Controller/TeacherController')


// // Set up the request headers
// const headers = new Headers();
// headers.append('Content-Type', 'application/json');


TeacherDashboardRouter.get('', TeacherController.ShowResults )
  

TeacherDashboardRouter.get('/:rollno',TeacherController.DelelteResult)


// TeacherDashboardRouter.put('/:rollno', async (req, res) => {
//   console.log("rollno is here1:")
//   console.log(req.body)
  
  

// })

module.exports = TeacherDashboardRouter
