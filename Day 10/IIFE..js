(function(){
    var a="geetha"
    function demo()
    {
        console.log(`my name is ${a}`);
    }
    demo()
    let b="geethika"
    function demo1()
    {
        console.log(`my name is ${b}`);
    }
    demo1()
})();

//let c=10;
//let d=20;
(function(c,d)
{
    let e=c+d;
    console.log(e);
}
)(10,20);

//---------------arrow-function-in-life--------------------
(()=>{
    console.log("geetha-geethika");
})();

//--------------------------------------------
let n="P.Geethika";
let p="7635428749";
(function() 
{
    console.log(`my name is: ${n}`);
    console.log(`phone.no:${p}`)    
})()