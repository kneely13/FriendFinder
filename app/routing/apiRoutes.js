var express = require ('express')

//create varibale called router to create a router instance and build off of it with gets, puts,  post delets, and simply module exports router
//This is what build a routing middleware as express calls it, wehn you require it, use this code
var router = express.Router()

// middleware that is specific to this router

//how you use it, router.get, defines the api route
router.get('/api', function (req, res) {
    //do a thing
    res.send('api friends')
})

//router.all is customizable and creates a customize catch all route for you, and maby safer than a get route, explained in express router


module.exports = router

//advantages to router:
//set options like
//everything in this router getting built, everything always has to have api prefex, 
//so instead of having to do /api, it would be just /, or get thing,
//you can prefex all your routes without havign to do api every time