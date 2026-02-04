function greet(name,callback){
    callback(name)
}

greet("hadiya",(name)=>{ //to pass the parameters
    console.log("welcome",name)
})









//callback is used in reallife for http