//pizza ordering using promise:
//if order is success(resolve) if order is failure(reject)
//if item is available or not

function placeorder(item){
    return new Promise((resolve,reject)=>{
        
        console.log("placing the order",item)
        let available=false;
        if(available) //success order
        {
            resolve("order confirmed...!!! "+item)
        }
        else //failure order
        { 
            reject("sorry "+item+" not available")
        }
    },5000) 
}

placeorder("pizza")
.then((order)=>{
    console.log(order)
})
.catch((error)=>{
    console.log(error)
});