//callback is a fn that passed as an argument to another function
//executed after another fn has finished

function register(name,callback)
{
  console.log("Registering the name -->" +name);
  setTimeout(() => {
    callback(name); //pass name to the welcome after 3s 
  },3000);
}

function welcome(name)
{
   console.log("welcome " + name);
}
register("hadiya",welcome)



//addition using callback

function add(a,b,callback)
{
   let c=a+b;
   callback(c)
}

function result(c)
{
   console.log("Result:" + c)
}
add(9,2,result)