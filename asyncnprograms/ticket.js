const { resolve } = require("path");

function checkTicket()
{
    return new Promise((resolve)=>{
        setTimeout(() => {
            let seatsavailable=false;
            resolve(seatsavailable? "Ticket confirmed" : "Ticket in waiting list")
        }, 2000);
    })
}

async function bookTicket() {
      console.log("checking ticket status...")
      const status= await checkTicket()
      console.log(status)
}
bookTicket();