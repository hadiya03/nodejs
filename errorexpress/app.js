//how to import express
const express = require("express")
const app = express();

//home page
app.get("/",(req,res)=>{
    res.send("this is the home page...!!")
});

//error handling for Middleware(404 page not found)

app.use((req,res)=>{
    res.status(404).send("404 page not found error...!")
})


//start server
app.listen(3000,()=>{
    console.log("server started on port 3000")
})