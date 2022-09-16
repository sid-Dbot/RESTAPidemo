const express = require("express");

const app = express();

let data={name:'Sid'};


app.get("/", function(req,res){
    res.send("Welcome to my very first REST API Demo.")
})
app.get("/p",function(req,res){
    res.json(data);
})
app.post("/p", function(req, res){

   
    console.log("This is the POST request.");
    res.json(data);
    res.end();
})


app.listen(8080,()=>{
    console.log("Server Started")
});