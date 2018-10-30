var express = require ('express')
var api = require('./apiRoutes')
//requiring router on server.js i tell app to use the routes just set up for it
var html = require('./htmlRoutes')

var app = express();

var port = process.env.PORT || 3000;

//telling express or our app to app.use the api route which is simpler instead of passing along app to other files
app.use(api)
app.use(html)

//The app will now be able to handle requests to /apiRoutes and /api





// make two arrays

var userA= [5, 1, 4, 4, 5, 1, 2, 5, 4, 1];

var userB= [3, 2, 6, 4, 5, 1, 2, 5, 4, 1];

var totalDifferencec= function(){

    var totalDifference = userA[i] - userB[i] ;
        
        if(userA[i] !== userB[i]){
            
            console.log(totalDifference)
        }
}
    
if (friends.length < 10) {
    app.post("/api/tables", function (req, res) {
        reservation.push(req)

        //req.body - is the data for the waitlist
        var newFriend = req.body;

        console.log(newFriend);

        res.json(newFriend);
    });


app.listen(port, function () {
    console.log("App listening on PORT " + port);
});