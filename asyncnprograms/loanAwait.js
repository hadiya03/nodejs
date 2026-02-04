/* cibil score check for loan approval
if cibil score more than 700--> loan approved else rejected...
use await/async for while checking the cibil score...*/

const { resolve } = require("path");


function LoanApprove()
{
    
    return new Promise((resolve) =>{
         setTimeout(()=>{
            resolve(500);
         },5000);
    })
}
async function cibilcheck() 
{
    console.log("checking for cibil score...!!!");
    const score= await LoanApprove();
    console.log("your cibil scores is:",score);
    if(score>=700)
    {
        console.log("your loan approved...")
    }
    else{
        console.log("loan not approved...")
    }
}

cibilcheck();