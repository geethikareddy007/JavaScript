// let color=window.prompt("enter a color-name")
// console.log(color);

// let demo = document.getElementById("demo")
// console.log(demo);

// demo.innerHtml = `${color}`

// demo.onmouseover = function()
// {
//     document.body.style.backgroundColor = `${color}`
//     document.body.style.transition = "ease all 5s"
//     demo.style.backgroundColor =`${color}`
//     demo.style.transition = "ease all 5s"
// }

// let btn=document.querySelector('#btn')
// console.log(btn)

btn.onclick =() =>{
    //console.log=("hello");
    let img=document.querySelector("img")
    console.log(img);
let display = img.classList.toggle('true')
if(display)
{
    img.style.visibility = "visible"
}else{
    img.style.visibility = "hidden"
}
}





