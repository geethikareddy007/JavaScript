// let a = document.body
// console.log(a);

// a.innerHTML += "<h1>REACT</h1>"

// let b = document.body.innerHTML += `<divid = demo></div>`
// console.log(b);

// let demo1 = document.getElementById = ("demo")
// console.log(demo1);
// demo1.style.border = "2px solid"

// demo1.innerHTML += `<ol>
// <li>item</li>
// <li>item2</li>
// </ol>`

// a.innerHTML += " "

//createElement method

//create an element

let demo2 = document.createElement("h1")
console.log(demo2);
demo2.textContent = "web tec"

//append child to parent element using appendChild or append method

document.body.appendChild(demo2);
demo2.style.backgroundColor ="red"

demo2.setAttribute("align" ,"center")
demo2.setAttribute("id","demo3")

//create a ol tag using createElement method

let ol =document.createElement("ol")
console.log(ol);

let li1 = document.createElement("ol")
ol.append(li1)
li1.textContent="hii"

let li2 = document.createElement("ol")
ol.append(li2)
li2.textContent="hello"
li2.style.backgroundColor= "blue"
