const express = require("express");

const app = express();


app.get("/", function(req,res){
    res.send("Welcome to my very first REST API Demo.")
})
app.get("/p",function(req,res){
    res.send("Hello FOOL!");
});


app.listen(8080);