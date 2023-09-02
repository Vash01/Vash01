const userModel = require('../models/Student')

const Login = (req, res) => {

    res.render('Pages/Student/login', { error: [] })
}

const StudentResult = (req, res) => {
    userModel.findByPk(req.params.rollno).
        then(result => {
            res.render('Pages/Student/dashboard', { result: result, error: [] })
        }).catch((err) => {
            return err
        })
}

const StudentPostResult = async (req, res) => {
    try {

        await userModel.findByPk(req.body.Rollno).
            then(result => {
                // console.log(result);
                if (result == null) {
                    res.render('Pages/Student/login', { error: ["Invalid Rollno or Date Of Birth"] })
                }

                else if (req.body.DOB == result.DOB) {
                    res.render('Pages/Student/dashboard', { result: result, error: [] })
                }

                else {
                    res.render('Pages/Student/login', { error: ["Invalid Rollno or Date Of Birth"] })
                }

            }).catch((err) => {
                return err
            })

    }
    catch (err) {
        return err
    }
}


module.exports = { Login, StudentResult , StudentPostResult}