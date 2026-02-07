//import mongoose

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/testingDB")
.then(()=>{
    console.log("mongodb connected...!")
})

.catch((error)=>{
        console.log("connection error: ",error)
});
