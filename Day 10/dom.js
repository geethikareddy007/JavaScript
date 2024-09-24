// console.log(window);
// console.log(window.document);
// console.log(window.navigator);
// console.log(window.history);
// console.log(screen);

// let name = window.prompt("enter your name");
// window.alert("my name is ${name}");
// window.confirm();

// console.log(window.document)
// console.log(document);
// console.log(document);

// document.write("Hii-geetha")
// document.writeIn("hello")
//     // document.writeln("hello")
//     // document.writeln("hello")
//     // document.writeln("hello")
//     // document.writeln("hello")
//     // document.writeln("hello")
// document.write("i am a teacher")
// document.write("<h1> my web-page</h1>")
// document.write(<ol>
//     <li>hii</li>
//     <li>today</li>
//     <li>is</li>
//     <li>friday</li>
//     <li>yes</li>
//     </ol>)

//console.log(typeof document);

//------------direct-access-------------

console.log(document.URL);
console.log(document.baseURI);
//console.dir(document.URL)
console.log(document.doctype);
console.log(document.head);
console.dir(document.head);
console.log(document.title);
document.title = "my web page"
console.log(document.title);
console.log(document.body);
console.log(document.body)

// console.log(document)
//console.log(window)

console.log(document.links);
console.log(document.links[0]);
console.log(document.links[1]);
console.log(document.links[2]);
console.log(document.links.length);

let link = document.links
console.log(link);

for(let i=0;i<link.length;i++){
    console.log(link[i]);
    link[i].className = "demo"
    link[0].id = "demo1"
    link[1].id = "demo2"
    link[0].href = "https://www.youtube.com"
}

// for(let j=0; j<link.length; j++){
//     if(j==2)
//         link[0].href =  "https://www.whatsapp.com"
//         link[1].href =  "https://www.youtube.com"
//         link[2].href =  "https://www.instagram.com"
// }
// else {
//      link[0].href =  "https://www.instagram.com"
//      link[1].href =  "https://www.youtube.com"
//      link[0].href =  "https://www.whatsapp.com"
// }
// //j++;

// let a1=10;
// let b1=20;
// if(a1>b1)
//     document.write("hii-from-if-block")
// }else{
//     document.write("hii-from-else-block")
// }

// let num=23;
//  while(num!=0){
//     let rem=num%10;
//     document.write(rem);
//     num/=10;
// }



