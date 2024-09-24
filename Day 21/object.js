// let obj={
//     name:"geetha",
//     id:1,
//     Boolean:true,
//     demo:() => console.log("hello"),
//     null:null,
//     undefined:undefined,
//     arr:[2,45,76]
// }
// console.log(obj)
// console.log(obj.demo())
// console.log(obj.arr)

// //constructor function

// function obj1(name,id)
// {
//     this.name=name;
//     this.id=id
// }
// let p1=new obj1("geetha",100)
// console.log(p1)

let obj={
    name:"geetha",
    id :1
}
console.log(obj);

//add key and value
obj.designation = "developer"
console.log(obj);

//update value
obj.id=100
console.log(obj);

//delete key and value
delete obj.designation
console.log(obj);

//print all keys
console.log(Object.keys(obj));

//print all values
console.log(Object.values(obj))

//assign(concat)
let obj2 = {
    phno:1235
}
console.log(obj2);

console.log(Object.assign(obj,obj2))

//entries(obj to array)
console.log(Object.entries(obj))

// //seal()
// Object.seal(obj)
// console.log(Object.isSealed(obj))
// console.log(Object.isSealed(obj2))
// obj.lname="kumar"
// console.log(obj)

// obj.name="anil"
// console.log(obj);

//freeze
Object.freeze(obj)
console.log(Object.isFrozen(obj))

obj.address="punjagutta"
console.log(obj);

obj.id=100
console.log(obj)