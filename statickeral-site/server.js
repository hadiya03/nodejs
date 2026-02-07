const express = require("express")
const app= express()

app.use(express.static("public"))

app.use((req,res)=>{
    res.status(404).send("<h1>404</h1>")
});


app.listen(3000,()=>{
    console.log("server running http://localhoost:3000")
})