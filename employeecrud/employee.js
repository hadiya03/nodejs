const mongoose = require("mongoose")

const employeeSchema = new mongoose.Schema(
    {
        name:String,
        age:Number,
        salary:Number
    }
);

//Student is the table name, student table is exported
module.exports=mongoose.model("employee",employeeSchema);