//to fetch data from database (to fetch data it requires time -await/async)

function fetchData()
{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("data received from database...!")
        },5000)
    })
}


async function getData() //async function to use wait
{
    const result = await fetchData();
    console.log(result)
}

getData();  //calling the async function