//table creation 
const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema(
    {
        name:String,
        age:Number,
        course:String
    }
);

//Student is the table name, student table is exported
module.exports=mongoose.model("Student",studentSchema);