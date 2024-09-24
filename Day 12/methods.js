// console.dir(document);
let a = document.getElementById("demo");
console.log(a);
a.style.color = "red"
console.log(a.textContent);

a.textContent = "hello-world"

// let b = document.getElementByClassName("demo1");
// console.log(b);
// console.log(b[0]);
// b[0].style.border = "2px solid black"
// b[0].style.color = "yellow"
// b[0].style.backGround = "black"

// console.log(b[0]).children;
// console.log(b[0].childNodes);
// b[0].firstChild.textContent = "hii hello"
// console.log(b[0].firstElementChild);
// b[0].firstElementChild.textContent = "contact"

//getElementByTagName

let h1 = document.getElementsByTagName("h1")
console.log(h1);
console.log(h1[0]);
console.log(h1[1]);
h1[1].style.backgroundColor = "green"
h1[1].textContent = " rock it"


//getElementByName

let name = document.getElementsByName("demo2")
console.log(name)
console.log(name[0]);
console.log(name[1]);
name[1].style.border = "2px solid black";

console.log(name[1].firstElementChild);
name[1].firstElementChild.style.letterSpacing ="10px"

//queryselector

let div = document.querySelector("#demo")
console.log(div);

let ol = document.querySelector(".demo")
console.log(ol);

let m = document.querySelector("*")
console.log(m);

//querySelectorAll

let div1 = document.querySelectorAll("#demo")
console.log(div1);
console.log(div[0]);

let ol1 =document.querySelectorAll("demo1")
console.log(ol1);
console.log(ol1[1]);

let n = document.querySelectorAll("*")
console.log(n);
console.log(n[4]);
console.log(n[4].textContent);

