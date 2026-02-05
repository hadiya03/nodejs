const http =require("http")

const server= http.createServer((req,res)=>{
    res.setHeader("Content-Type" , "text/plain")
    //home page
    if(req.url == "/"){
        res.statusCode=200;
        res.end("you are in the home page");
    }
    //about page
    else if(req.url =="/about")
    {
        res.statusCode = 200;
        res.end("you are in the about page");
    }
    //page not found 404
    else{
       res.statusCode=404;
       res.end("Page not found...!")
    }
});



server.listen(3000,()=>{
    console.log("Server running on port 3000, http://localhost:3000")
})