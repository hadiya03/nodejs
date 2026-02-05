const http = require("http");
const server = http.createServer((req,res)=>{
    res.writeHead(201,{"content-type" :"text/html"});
    res.write("<h> 201 ok - request successfull</h1>")
    res.end()
})

server.listen(3000,()=>{
    console.log("serevre running on port 3000 http://localhost:3000")
})