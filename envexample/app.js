//Import express
const express = require("express")

//Load environment variables
require("dotenv").config();

const app = express();

//read environment variables
const PORT =process.env.PORT;
const APP_NAME = process.env.APP_NAME;

//simple route
app.get("/",(req,res)=>{
    res.send(`Welcome to ${APP_NAME}`);
})

//start server
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
});

