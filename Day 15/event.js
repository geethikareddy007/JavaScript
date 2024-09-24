function demo(){
    console.log("hello")
}

let demo1=document.querySelectorAll("#demo1")
    console.log(demo1);

demo1.onclick = function(){
    console.log(hello-world);
}
demo1.onclick = function(e){
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(hello-world);
}

let demo2 = document.querySelector("#demo2")
console.log(demo2);

demo2.onclick = () =>{
    // setTimeout(() =>{
    //     let res=Math.floor(Math.random *100)
    //     console.log(res);
    // } ,2000)

let res=Math.floor(Math.random()*10000)
console.log(res);

let r=Math.floor(Math.random()*10000).toString(16)
console.log(r);
document.body.style.backgroundColor = `#${r}`
}

let demo3 = document.querySelector("#demo3")
console.log(demo3);

demo3.onkeypress = (e) => {
    console.log(e);
    let a=Math.floor(Math.random() * 100000).toString(16)
    console.log(a);
    document.body.style.backgroundColor = `#${a}`
}