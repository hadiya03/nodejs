const mongoose = require("mongoose");
const employee = require("./employee")


//connect to db ---> EmployeeDB is a database...27017 is the port number

mongoose.connect("mongodb://localhost:27017/EmployeeDB")
.then(()=>{
    console.log("connected to DB ")
})

.catch((err)=>{
    console.log(err);
})

async function CRUDemp() {
  //   const emp1 = new employee({
  //         name:"priya",
  //         age: 30,
  //         salary: 40000
  //   }
  // )
  // await emp1.save();
  // console.log("employee1 added..!")



  // const empread = await employee.find();
  // console.log(empread);


  // await employee.updateOne({
  //   name:"priya",
  //   age:30,
  //   salary:60000
  // })

  const result = await employee.deleteOne({
    name:"priya",
    age:30,
    salary:60000
  })
  mongoose.disconnect();
}

CRUDemp();