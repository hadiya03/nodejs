//import mongoose library
const mongoose = require("mongoose")

//import the student.js file
const Student = require("./student")

//connect to db ---> SchoolDB is a database...27017 is the posrt number

mongoose.connect("mongodb://localhost:27017/SchoolDB")
.then(()=>{
    console.log("connected to DB ")
})

.catch((err)=>{
    console.log(err);
})

async function runCRUD(){
    //C --> create a new student
    /*const student1 = new Student({
        name:"Fathima",
        age:10,
        course:"Node.js"
    });
    //save the student document to Mongodb
    await student1.save();
    console.log("student1 added...!")*/

    //mongoose.disconnect();

    //R --> read from db
    /*const students = await Student.find();
    console.log(students);*/

    //U --> update 
    /*await Student.updateOne(
        {
            name: "Fathima Abbas",
            age: 20,
            course:"Aws" 
        }
    )
    console.log("data updated..!")*/
    


    const result=await Student.deleteOne(
        {
            name:"Fathima Abbas",
            age:20,
            course:"Aws"
        }
    )

    console.log("data deleted..!", result)
    mongoose.disconnect();
}

runCRUD();

