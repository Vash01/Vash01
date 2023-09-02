const express = require('express')
const EditRecordsRouter = express.Router()
const axios = require('axios')
const userModel = require('../../../models/Student')
const bodyParser = require('body-parser')
const { check, validationResult } = require('express-validator');
const { urlencoded } = require('body-parser');
const urlencodedParser = bodyParser.urlencoded()
const TeacherController = require('../../../Controller/TeacherController')
const sequelize = require('../../../connection')
const { Sequelize, DataTypes } = require('sequelize');


EditRecordsRouter.get('/:rollno', TeacherController.EditRouterPage)


EditRecordsRouter.post('/:rollno', urlencodedParser, [
    check('name').notEmpty().withMessage('Name is required')
        .exists()
        .isLength({ min: 2 }),
    check('DOB').notEmpty().withMessage('Date Of Birth is required')
        .isDate(),
    check('Score').notEmpty().withMessage('Score is required')
        .isInt({ min: 0 }),
],
    async (req, res) => {

        const err = validationResult(req);
        const rollno = req.params.rollno;
        if (!err.isEmpty()) {

            res.render(`Pages/Teacher/edit/${rollno}`, { error: err.errors });
        }
        else {
            try {
                const errors = [];

                if (req.body.name && req.body.DOB && req.body.Score) {
                   
                    try {
                        //console.log(req.body,rollno)
                        const putData = {
                            Name : req.body.name,
                            Rollno: rollno,
                            DOB : req.body.DOB,
                            Score : req.body.Score
                        }

                        console.log(putData)
                        await userModel.update(putData, {where :{Rollno : rollno}}).
                        then(result=>{
                            //console.log(result)
                            res.redirect('/Teacher/Dashboard')
                        }).
                        catch((err) => {
                            return err
                        })

                    }
                    catch {
                        (err => {
                            res.render('Pages/PageNotFound');
                        })
                        
                    }

                }

                else {
                    if ( req.body.name === '' && req.body.dob === '' && req.body.score === '') {
                        //console.log("requesting body for check")

                        //console.log(req.body);
                        errors.push('this field is required')
                        res.render('Pages/Teacher/edit/${rollno}', { error: errors });
                    }
                    else {

                        if (req.body.name === '') {
                            errors.push('Name is required')
                        }

                        if (req.body.dob === '') {
                            errors.push('Date of Birth is required')

                        }

                        if (req.body.score === '') {
                            errors.push('Score is required')

                        }
                        res.render(`Pages/Teacher/edit/${rollno}`, { error: errors });

                    }

                }
            } catch (error) {
                console.log(error)
                //res.render('Pages/PageNotFound')
            }
        }
    }

)



module.exports = EditRecordsRouter