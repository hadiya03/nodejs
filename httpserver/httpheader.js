const http = require("http")
const server =http.createServer((req,res)=>{
    //setting http headers
    res.writeHead(200,{
        "Content-Type" : "text/plain" ,
        "X-App-Name" : "MyNodeServer"
    });
    res.write("Hello! This response has headers.");
    res.end();
})
server.listen(3000,()=>{
    console.log("server running on posrt 3000 http://localhost:3000")
})