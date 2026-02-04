function verifycard(cardno,callback)
{
     console.log("verfying card..."+cardno);
     setTimeout(()=>{
         
         console.log("Card verification successfull...!")
         callback();
     },5000)
}


function withdrawCash() //callback function
{
   console.log("Please collect the cash...");
}

verifycard(5242,withdrawCash);