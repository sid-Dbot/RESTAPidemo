import  express  from "express";
import bodyParser from "body-parser";

import usersRoutes from "./routes/user.js";


const app = express();
app.use(bodyParser.urlencoded({extended:false}))

app.use(bodyParser.json());


//app.use("/users", usersRoutes);

let data=[{name:'Sid'}];


app.get("/", (req,res) => res.send("Welcome to my very first REST API Demo."));

app.get('/users',(req,res)=>{ 
res.send("users page")});


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
    console.log("Server Started on http://localhost:8080")
});