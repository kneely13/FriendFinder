var express = require ('express')
var api = require('./apiRoutes')
var html = ('./htmlRoutes')
var app = express();


app.use(api)
app.use(html)

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());




// start the server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
