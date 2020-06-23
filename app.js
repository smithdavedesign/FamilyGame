//within scripts key in package.JSON, include a sub key called start that will auto 
const express = require("express");
const path = require("path");
const pageRouter = require("./routes/pages")
const app = express();

//body parser
app.use(express.urlencoded( { extended: false } ));


//serve static files
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "JS")));

// template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");


//router
app.use("/", pageRouter);



// server
app.listen(3000, () => {
    console.log("The server is running on port 3000...")
})

module.exports = app;

