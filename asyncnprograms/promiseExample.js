//number is positive or not --> resolve means--> +ve number
//reject if its is negative number..
//using two parameters resolve and reject for this promise



function Checknumber(num){ //fn to check number
    return new Promise((resolve,reject)=>{
        if(num>0)
        {
            resolve("positive number...!")
        }
        else{
            reject("it is not a positive number...!")
        }
    });
}
Checknumber(5)
.then((result) =>{
    console.log(result)
})
.catch((error)=>{
    console.log(error)
})