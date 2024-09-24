// window.fetch("data.json")
// .then((data) => data.json())
// .then((res) =>{
//     console.log(res);
//     res.map((x) =>{
//         console.log(x);
//         let demo = document.getElementById("demo")
//         console.log(demo);
//         let option=
//         `
//         <option value=${x.country}>$x.country}</option>
//         `
//         demo.innerHTML +=option
        
//     })
// })


// let data = async () =>{
//     let data = await window.fetch("data.json")
//     console.log(data);
//     let res = await data.json()
//     console.log(res);
//     res.map((x) =>{
//         console.log(x);
//         let demo = document.getElementById("demo")
//         console.log(demo);
//         let option=`
//         <option value=${x.country}>${x.country}</option>
//         `
//         demo.innerHTML +=option
//     })
// }
// data()

//local & session stroages

// window.localStorage.setItem("name","geetha")
// window.localStorage.setItem("id","1")

// console.log(window.localStorage.getItem("name"));

// window.localStorage.clear()

// window.sessionStorage.setItem("name","geethika")
// window.sessionStorage.setItem("phonno","323234");

// console.log(window.sessionStorage.getItem("phonnno"));

// sessionStorage.clear()

let  btn = document.getElementById("btn")
console.log(btn);

btn.addEventListener("click", (e) =>{
    e.preventDefault()  //it uses to stop page reloading
    let name=document.getElementById("name").value 
    console.log(name);
    let password=document.getElementById("password").value 
    console.log(password);
    localStorage.setItem("name",name)
    localStorage.setItem("password",password)
})

