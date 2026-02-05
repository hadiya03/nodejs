const http= require("http");

//object creation
const server = http.createServer((req,res)=> {
   res.writeHead(200,{"content-type" :"text/html"});
   res.write("<h> 200 ok - request successfull</h1>")
   res.end()
});

server.listen(3000,()=>{
    console.log("Server running in the port 3000: http://localhost:3000/")
})