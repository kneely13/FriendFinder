var express = require('express')

//create varibale called router to create a router instance and build off of it with gets, puts,  post delets, and simply module exports router
//This is what build a routing middleware as express calls it, wehn you require it, use this code
var router = express.Router()

router.get('/', function(req,res) {
    res.send('home.html')
})


module.exports = router

//there self contained within these router objects, you have created with express