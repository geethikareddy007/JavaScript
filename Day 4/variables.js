'use strict' 
//scopes

var a=10;
console.log(a); //global
console.log(window);

let b=20;
console.log(b); //local

const c=30;
console.log(c); //local

console.log(window);

//declaration

var a1;
console.log(a1);

let b1;
console.log(b1);

//const c1;   'const' declaration must be declared.
//console.log(c) //syntax error

// declare & initialize
var a2=10;
console.log(a2);

let b2=10;
console.log(b2);

const c2=10;
console.log(c2);

//re-initialize

var a3='hello'
    a3=10
console.log(a3);    

let b3=100
    b3=20
console.log(b3);

// const c3=20;
//     c3=9
// console.log(c3); //type error


//re-declare & re-initialize

var a4=10
console.log(a4);

var a4='hello'
console.log(a4);

 let b4=2
 console.log(b4);

// let b4=20
// console.log(b4) //syntax error

 const c4=30
 console.log(c4);

// const c4=48
// console.log(c4) //syntax error


let a5=10
    console.log(a);







