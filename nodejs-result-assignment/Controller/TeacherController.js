const userModel = require('../models/Student')

const ShowResults = (req,res) =>{
    try {
        userModel.findAll().
          then((result) => {
            // res.send(result);
            res.render('Pages/Teacher/dashboard', { results: result })
    
          }).catch((err) => {
            return err
          })
      }
      catch (err) {
        return err
      }
}

const DelelteResult = (req,res)=>{
    
  //console.log(req.params.rollno);
  userModel.destroy({ where: { Rollno: req.params.rollno } }).
  then(result => {
    res.redirect('/Teacher/Dashboard')
  }).catch((err) => {
    return err
  })
}

const AddRouterPage = (req,res)=>{
    try {
        res.render('Pages/Teacher/add', { error: [] });
    } catch (error) {

        console.log(error)
    }
}

const EditRouterPage = (req,res)=>{
    userModel.findByPk(req.params.rollno).
    then(result => {
        res.render('Pages/Teacher/edit', { result: result, error: [] })
    }).catch((err) => {
        return err
    })

}
module.exports = {ShowResults,DelelteResult,AddRouterPage, EditRouterPage}