const express = require("express");

const app = express();

app.get("/peeps",function(req,res){
    res.send("Hello FOOL!");
});


app.listen(8080);