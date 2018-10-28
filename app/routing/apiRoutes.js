var express = require ('express')

var router = express.Router()

router.get('/api', function (req, res) {
    //do a thing
    res.send('api things')
})

module.exports = router
