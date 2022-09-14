const express = require("express");

const App = express();

App.get("/peeps",function(req,res){
    res.send("Hello FOOL!");
});


App.listen(3000);