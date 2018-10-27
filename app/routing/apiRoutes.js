var express = require ('express')

var router = express.Router()

router.get('/api', function (req, res) {
    //do a thing
    res.send('api things')
})

module.exports = router
//build out nice list of api routes  then return it



//include two routes

//First: A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// app.get("/api/friends", function(req, res) {
//     return res.json(friends); //this function will need to display a JSON of all possible friends
// });

  
// //Second: A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic

// app.post("/api/friends", function (req, res){
    

//     var newFriend = req.body;

//     console.log(newFriend);

//     friends.push(newFriend); 

//     res.json(newFriend);
// })

// app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   });