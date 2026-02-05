const express = require("express");

const app = express();

//custom middleware

app.use((req,res,next)=>{
    console.log("middleware executed for:" ,req.url)
    next()
})
app.get("/",(req,res)=>{
    res.send("response from home page ---> /")
})

app.get("/contact",(req,res)=>{
    res.send("response from contact page ---> /contact")
})

app.get("/about",(req,res)=>{
    res.send("response from about page ---> /contact")
})



app.listen(3000,()=>{
    console.log("server running at http://localhost:3000")
})