//to create table or collection without manually


//import mongoose library
const { error } = require("console")
const mongoose = require("mongoose")

//connect to db ---> StudentDB is a database...27017 is the posrt number

mongoose.connect("mongodb://localhost:27017/StudentDB")
.then(()=>{
    console.log("connected to DB ")
})

.catch((error)=>{
    console.log(error);
})


//create the schema structure for student table

const studentSchema= new mongoose.Schema(
    {
        name : String //student name field
    }
)

//create student model for schema -->table named students created with column name  
const Student = mongoose.model("Student",studentSchema)

//create a student

const s1= new Student({name:"hadiya"})
s1.save()
.then(()=>{
    console.log("hadiya inserted...!")
})

//more students

const s2 = new Student({name:"priya"})
s2.save()
.then(()=>{
    console.log("priya inserted...!")
})


const s3 = new Student({name:"riya"})
s3.save()
.then(()=>{
    console.log("riya inserted...!")
})