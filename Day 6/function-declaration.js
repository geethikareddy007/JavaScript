
// console.log(demo); 
// //it is hoisting here.
// demo()  
// //it is hoisting here.
// console.log(demo());  
// //it is hoisting here.

// function demo()
// {
//     console.log("hello-world")
// }
// console.log(demo);
// demo()

// console.log(demo.prototype.constructor);
// console.log(demo.prototype);


// console.log(add(100,100));
// //it is hoisting here
// function add(a,b)
// {
//     let c=a+b;
//     return c
// }
// console.log(add);
// console.log(add(10,20));
// console.log(add(10+10,20));


//prompt method
//It is used to take i/p from end-users. this method present inside window object.
// let a=window.prompt("enter your name") 
// console.log(a);


function demo1(h,v,m,j,l,v,h,q,r){
    console.log(h+v);
    console.log(m);
    console.log(j,l)
}
demo1(10,20,40,50,7,9,6)

function demo2(){
    console.log(arguments);
    console.log(arguments[0]);
    console.log(arguments[1]);
}
demo2(55,65)

console.log(window);
var p=50
let d=55
function d1(){
    let d=85
    var p=20
    console.log(d);
    console.log(this.d);
    console.log(window.d);
    console.log(p);
    console.log(this.p);
    console.log(window.p);

}
d1()
console.log(window);

function d2(){
    console.log("hi js")
    return "bye js"
    console.log("hi java");

}
d2()
console.log(d2());

let g1=Number(window.prompt("enter the number"))
console.log(g1);
//let g2=Number(window.prompt("enter the number"))
//console.log(g2)
//console.log(typeof g1);

function d8(o){
    console.log(arguments[0]+arguments[1]);
    for(let i=1;i<=10;i++){
        console.log('${0}*${i}=${o*i}')
        document.write('${o}*${i}=${o*i}')
        document.write("<br>")
    }
}
d8()

