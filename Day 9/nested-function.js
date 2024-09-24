// console.log(window)
// console.log(this);

// var a=10
// let b=20
// function demo()
// {
//     var a="hello"
//     let b="react"
//     console.log(a);
//     console.log(b);
//     console.log(this.a);
//     console.log(this.b);
// }
// demo()

// function parent()
// {
//     let a=10;
//     function child()
//     {
//         console.log(a);
//     }
//     return child()
// }
// parent()

//---------clouser--------

console.log("start")
function parent()
{
    let a=10;
    function child()
    {
    console.log(a);
    }
return child
}
parent()()
parent()()

function parent1()
{
    let a='hello';
    function child1()
    {
        console.log(a);
        function child_1()
        {
            console.log(a);
        }
        return child_1
    }
    return child1
}
parent1()()()

function p1()
{
    function c1()
    {
        console.log("i am c1");
        function c1_1()
        {
            console.log("i am c1_1");
        }
        return c1_1
    }
    function c2()
    {
        console.log("i am c2");  
    }
    return [c1,c2]
}
p1()[0]()
p1()[1]()
//0r
let res=p1()
res[0]()()
res[1]()

