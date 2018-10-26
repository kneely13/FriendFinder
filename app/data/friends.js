var friends = [{
    "name":"User1",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
  },
  {
    "name":"User2",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        3,
        2,
        6,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
}]
  

    app.post("/api/waitList", function (req, res) {

        // pushes the request(object we just created) into the numbers Array.
        waitList.push(req)

        var newWaitList = req.body; 

        console.log(newWaitList);

        //res.json(takes result and turns it into json)
        res.json(newWaitList);
    });
}
