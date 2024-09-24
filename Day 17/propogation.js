let grandparent = document.getElementById("grand-parent")
console.log(grandparent);

let parent = document.getElementById("parent")
console.log(parent);

let child = document.getElementById("child")
console.log(child);

// grandparent.addEventListener("click",(e) =>{
//     console.log(grandparent)
// },true)

// parent.addEventListener("click",(e) =>{
//     console.log(parent)
// }, true)

// child.addEventListener("click",(e) =>{
//     console.log(child)
// },true)

// grandparent.addEventListener("click",(e) =>{
//     console.log(grandparent);
// },false)

// parent.addEventListener("click",(e) =>{
//     console.log(parent)
// }, false)

// child.addEventListener("click",(e) =>{
//     console.log(child)
// },false)

grandparent.addEventListener("click",(e) =>{
    e.stopImmediatePropagation()
    console.log(grandparent)
},false)

parent.addEventListener("click",(e) =>{
    e.stopImmediatePropagation()
    console.log(parent)
}, false)

child.addEventListener("click",(e) =>{
    e.stopPropagation()
    console.log(child)
},false)
