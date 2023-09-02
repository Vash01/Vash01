const express = require('express')
const AddRecordsRouter = express.Router()
const axios = require('axios');
const bodyParser = require('body-parser')
const { check, validationResult } = require('express-validator');
const { urlencoded } = require('body-parser');
const userModel = require('../../../models/Student')
const urlencodedParser = bodyParser.urlencoded()
const TeacherController = require('../../../Controller/TeacherController')

AddRecordsRouter.get('', TeacherController.AddRouterPage)


AddRecordsRouter.post('', urlencodedParser, [
    check('Name', 'Name is required')
        .exists()
        .isLength({ min: 2 }),
    // .require,
    check('Rollno').notEmpty().withMessage('Roll Number is required')
        .exists()
        .isLength({ min: 1 }).isInt({ min: 1 }),
    // .require,
    check('DOB').notEmpty().withMessage('Date Of Birth is required')
        .isDate(),
    // .require,
    check('Score').notEmpty().withMessage('Score is required')
        .isInt({ min: 0 }),
    // .require]
],
    async (req, res) => {

        const err = validationResult(req);


        if (!err.isEmpty()) {
            console.log(err);
            res.render('Pages/Teacher/add', { error: err.errors });
        }
        else {

            //console.log(req.body.no);
            const present = await userModel.findByPk(req.body.Rollno)
            //console.log(present.body)
            if (present != null) {
                res.render('Pages/Teacher/add', { error: [] });
            }
            else {

                try {
                    console.log("Inserting into model vanshika")
                    const newRecord = new userModel(req.body)
                    newRecord.save();

                    userModel.findAll().
                        then(result => {
                            res.redirect('/Teacher/Dashboard')
                        }
                        ).
                        catch((err) => {
                            return err
                        })
                }

                catch (error) {

                    res.redirect('*')
                }
            }


        }
    }
)


module.exports = AddRecordsRouter