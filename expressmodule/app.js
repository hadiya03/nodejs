/*//import express

const express = require("express")
//create and intance for express framework
const app = express()

//using get route for the home page ("/")
app.get("/",(req,res)=>{ 
    // send a response for the client ---> browser 
    res.send("Welcome to Express...!")
})

//starting the server on port 3000
app.listen(3000,()=>{
    console.log("Server running on port 3000")
})*/


//using port 8000
const express = require("express")
//create and intance for express framework
const app = express()

//using get route for the home page ("/")
app.get("/",(req,res)=>{ 
    // send a response for the client ---> browser 
    res.send("Welcome to Express...!")
})

//starting the server on port 3000
app.listen(8000,()=>{
    console.log("Server running on port 8000")
})