const express = require('express')
const HomeRouter = express.Router()
const axios = require('axios')

HomeRouter.get('', async (req, res) => {
    res.render('Pages/home')

    // try {
    //     const resultAPI = await axios.get('')
    //     res.render('Pages/home',{articles:resultAPI.data})

    // } catch (err) {
    //     if(err.response){
    //         console.log(err.response.data)
    //         console.log(err.response.status)
    //         console.log(err.response.headers)
    //     }
    // }

})


module.exports = HomeRouter