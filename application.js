const express = require("express");

const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:false}))

app.use(bodyParser.json());

let data={name:'Sid'};


app.get("/", function(req,res){
    res.send("Welcome to my very first REST API Demo.")
})
app.get("/p",function(req,res){
    res.json(data);
})
app.post("/p", function(req, res){
    if(req.body && req.body.name){
        data.push({name:req.body.name});
    }
   
    //console.log("A POST request is made.");
    console.log(req.body.name)
    res.json(data);
    res.end();
})


app.listen(8080,()=>{
    console.log("Server Started")
});