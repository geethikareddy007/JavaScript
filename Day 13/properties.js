let a = document.body
console.log(a);

console.log(a.firstElementChild);
console.log(a.firstElementChild.textContent);
a.firstElementChild.textContent = "hello-world"
a.firstElementChild.style.backgroundColor = "red"

console.log(a.firstChild);
a.firstChild.textContent = "web-tec"

//lastElementChild

console.log(a.lastElementChild);

//lastChild

console.log(a.lastChild);

//children

let child = a.children
console.log(child);
console.log(child[1]);

console.log(child[1].lastElementChild);
child[1].lastElementChild.style.backgroundColor = "yellow"
console.log(child[1].lastChild);

// console.log(Array.isArray(child));

// let res = Array.from(child)
// console.log(res);
// console.log(Array.isArray(res))

// childnode

console.log(a.childNodes);

console.log(child[1].childNodes);

//parentElement

console.log(a.parentElement);

console.log(a.parentElement.parentElement);

console.log(a.firstElementChild.nextElementSibling.parentElement);

//parentNode
console.log(a.parentNode);

console.log(a.parentNode.parentNode);

//nextElementSibling
console.log(a.firstElementChild.namespaceURI.firstElementChild.nextElementSibling);

console.log(a.children[1].firstElementChild.nextElementSibling);

//nextSibling
console.log(a.firstElementChild.nextSibling);

//previousElementSibling-and-previousSibling
console.log(a.children[1].children[2].previousElementSibling);
console.log(a.children[1].children[2].previousSibling);


