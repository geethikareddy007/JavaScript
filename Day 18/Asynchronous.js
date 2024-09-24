function main(m,n)
{
    setTimeout(() =>{
        for(let i=m;i<=n;i++)
        {
            console.log(i);
        }
    },4000)
}
main(1,10)

function demo()
{
    console.log("no's printed");
}
demo()

function main(m,n)
{
    new Promise((resolve,reject) =>{
        setTimeout(() =>{
            if(isNaN(m) || isNaN(n)){
                return reject()
            }
            for(let i=m; i<=n; i++)
            {
                console.log(i);
            }
            return resolve()
        }, 4000)
    })
    .then(() => console.log("async is succesfull"))
    .then(() => console.log(5+3))
    .catch(() => console.log("error occured"))
    .finally(() => console.log("Program Ends"))
}


//example 2 for promise
// function demo ()
// {
//     console.log("numbers printed")
// } 
// demo()   

// let room =true
// new Promise((resolve,reject) =>{
//     setTimeout(() =>{
//         if(room)
//         {
//             return resolve()
//         }else{
//             return reject()
//         }

//     }, 3000);
// })
// .then(() => console.log("room is cleaned"))
// .catch(() => console.log("room is not cleaned"))





