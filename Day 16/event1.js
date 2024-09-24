let login=document.getElementById("login")
console.log(login);

login.onclick =() =>{
    let modal = document.querySelector('section')
    console.log(modal);
    let display = modal.classList.toggle("true")
    if(display)
    {
        modal.style.display="block"
    }else{
        modal.style.display="none"
    }

    }
login.onclick =() =>{

}
let aside = document.querySelector("aside")

aside.onclick =() =>{
   // console.log("dfgccmn")
   let modal = document.querySelector('section')
   console.log(modal);
   modal.style.display="none"
}

