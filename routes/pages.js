const express = require("express");
const router = express.Router();

//get index page
router.get("/register", (req, res, next) => {
    res.render("register");
})

router.post("/register", (req, res, next) => {
    res.send(req.body);
})

router.get("/sayhelloWorld", (req, res, next) => {
    res.send('helloWorld!');
});



module.exports = router;