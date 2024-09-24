//implict-return-arrow-function

//demo()
let demo = _=> console.log("hello");
console.log(demo);
demo()

let demo1 = (a,b) =>console.log(a+b)
console.log(demo1);
demo1(10,10)

//explict-return-arrow-function

let demo2 =() => {return 'hello'}
console.log(demo2);
console.log(demo2());

let demo3 = (a,b) =>{
    return a+b
}
console.log(demo3(100,100));

//function-programming arrow function

// let operation = (a,b,task) => {
//     let c=task(a,b)
//     return c
// }

// let add = operation(10,10,(a,b) => {
//     return a+b
// })
// console.log(add);

// let sub = operation(200,100,(a,b) => {
//     return a-b
// })  
// console.log(sub);

// let operation = (task) => {
//     let a = Number(prompt("enter a value"))
//     let b = Number(prompt("enter b value"))
//     let c = task(a,b)
//     return c
// }

// let add = operation((a,b) => {
//     return a+b
// })
// console.log(add);
// Window.alert(`the addition == ${add}`)

// let sub = operation((a,b) => {
//     return a-b
// })
// console.log(sub);
// window.alert(`the sub ${sub}`)

//----------------------------------

let a = Number(prompt("enter a value"))
let b = Number(prompt("enter b value"))
let operation = (a,b,task) => {
    let c = task(a,b)
    return c
}

let add = operation(a,b,(a,b) => {
    return a+b
})
console.log(add);

let sub = operation(a,b,(a,b) => {
    return a-b
})
console.log(sub);
