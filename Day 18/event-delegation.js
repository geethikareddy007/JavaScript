let div = document.querySelector("div")
console.log(div);

div.addEventListener("click", (e) => {
    if(e.target.tagName === "BUTTON")
    {
        console.log("hello-world")
    }
})

let ol = document.querySelector("ol")
console.log(ol);

ol.addEventListener("click",(e) =>{
    if(e.target.tagName === "LI")
    {
        console.log("hello")
        e.target.style.backgroundColor ="red"
    }
})

