const express = require('express')
const app = express()

app.get('/register', function (req, res) {
    //request 
    req.body //last name , firstname {}
    var carID = req.query.carID;


})

app.listen(3000)