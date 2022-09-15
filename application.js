const express = require("express");

const app = express();

const data={name:'Sid'};


app.get("/", function(req,res){
    res.send("Welcome to my very first REST API Demo.")
})
app.get("/p",function(req,res){
    res.json(data);
})
app.post("/p", function(req, res){

    if(req.body && req.body.name)
    {
        data.data.push({name:req.body.name});
    }
    
    res.json(data);
    res.end();
})


app.listen(8080);