const http = require("http")
const server = http.createServer((req,res)=>{
      //check if the requested url is "/api"
      if(req.url === "/api")
      {
        //det response header to send json data
        res.setHeader("Content-type","application/json")
        res.end(
        JSON.stringify({ //server(node js) data send to client(browser)
            name:"prabhu",
            role:"actor"
        })
       );
      }
      else{
        res.setHeader("Content-type","text/plain");
        res.end("page not found");
      }
});

server.listen(3000,()=>{
    console.log("Server running at http://localhost:3000")
})