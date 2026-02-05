const express = require("express");
const app = express()

app.use(express.json());



//use postman to post the data
app.post("/users",(req,res)=>{
    console.log(req.body); // display the received data the console
})

app.listen(3000,()=>{
    console.log("server running on port 3000")
})