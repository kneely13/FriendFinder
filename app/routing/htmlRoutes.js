var express = require ('express')
var path = require ('path')

var app = express();

var PORT = process.env.PORT || 8080;
//include two routes

//First: A GET Route to /survey which should display the survey page.
app.get("/survey", function(req,res){
    res.sendFile(path.join(__dirname, "survey.html"));
})

//Second: A default, catch-all route that leads to home.html which displays the home page.
app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "home.html"));
    // res.render('home')
})

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });