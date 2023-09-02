const express = require('express')

const app = express()
const port = 5000


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }))

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true); next();
});

//DB model
const userModel = require('./models/Student')


//static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))

//Templating engine
app.set('views', './src/views')
app.set('view engine', 'ejs')

//Routes

const HomeRouter = require('./src/routes/Home')
app.use('/', HomeRouter)


const StudentLoginRouter = require('./src/routes/Student/Login')
app.use('/Student/Login', StudentLoginRouter)


const StudentDashboardRouter = require('./src/routes/Student/Dashboard')
app.use('/Student/Dashboard', StudentDashboardRouter)


const TeacherDashboardRouter = require('./src/routes/Teacher/Dashboard')
app.use('/Teacher/Dashboard', TeacherDashboardRouter)


const AddRecordsRouter = require('./src/routes/Teacher/Add')
app.use('/Teacher/Add', AddRecordsRouter)


const EditRecordsRouter = require('./src/routes/Teacher/Edit')
app.use('/Teacher/Edit', EditRecordsRouter)




app.all('*', (req, res) => {
  res.render('Pages/PageNotFound', { error: [] })
  // res.status(404).send('<h1>404! Page not found</h1>');
});


//DB connection
const connection = require('./connection')
const { response } = require('express')
app.use(bodyParser.json())
// app.use(express.json())

//Listening on port 5000
app.listen(port, () =>
  console.log('http://localhost:5000'));



