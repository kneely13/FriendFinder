//include two routes

//First: A GET Route to /survey which should display the survey page.
app.get("/survey", function(req,res){
    console.log("this worked")
})

//Second: A default, catch-all route that leads to home.html which displays the home page.