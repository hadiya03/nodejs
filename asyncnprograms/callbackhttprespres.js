//http --> in-build module

const http=require("http");

//create the server with call (req,res)
const server = http.createServer((req,res) => {
   
    res.write("server started on localhost")
});

server.listen(3000,"localhost",()=>{
    console.log("server running at http://localhost:3000")
})


//req - client to server
//res - server to client