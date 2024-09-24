let img = document.images
console.log(img);
console.log(img[0]);
console.log(img[1]);
console.log(img.length);

for(let i=0;i<img.length;i++)
{
    console.log(img[1])
    img[i].style.height = "200px"
    img[i].style.width = "200px"
    img[i].style.borderRadius = "100%"

}
img[0].setAttribute("alt","nature")
console.log(img[0].getAttribute("alt"))
img[0].removeAttribute("alt")

img[1].setAttribute("id","demo")
console.log(img[1].getAttribute("id"))
img[1].removeAttribute("id")

let form = document.forms
console.log(form);
form[0].style.backgroundImage = "url('https://cdn.pixabay.com/photo/2024/03/11/18/51/sunset-8627419_1280.jpg')"
form[0].style.height = "400px"
form[0].style.width = "500px"