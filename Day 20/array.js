let arr=[10,20,30,40]
console.log(arr)
console.log(arr.length)

console.log(arr.indexOf(40))

console.log(arr.push(50,60))
console.log(arr)

console.log(arr.pop())
console.log(arr)

console.log(arr.unshift(1,5))
console.log(arr)

console.log(arr.shift())
console.log(arr)

console.log(arr.includes(50))

let arr1=[50,60]
console.log(arr.concat(arr1))

console.log(arr.slice(0,3))

let arr3=[10,20,30,40,50]
console.log(arr3.splice(0,3,'Hello'))
console.log(arr3)

console.log(arr.reverse())

console.log(arr.join('+'))

console.log(Array.isArray(arr))

let str='hello'
console.log(str)
console.log(Array.from(str))

let arr5=[50,20,10,40,30]
console.log(arr)
console.log(arr5.sort())
let arr6 =[1000,1,20,200,100]
console.log(arr6.sort((a,b) =>
    {
       // return b-a  //for getting descending order
        return a-b  // for getting ascending order
    }
))

let arr7=[10,20,30,40]
for(let ele in arr7)
{
    console.log(ele)  
}

for(let ele1 of arr7)
{
    console.log(ele1)
}

arr7.forEach((value, index)=>
{
    console.log( `${value} => ${index}`)
})

let b=arr7.map((ele) =>{
    return ele+10
})
console.log(b)

let c=arr7.filter((ele) =>
{
    return ele>10
})
console.log(c)

let d=arr7.reduce((accumulator,lastindex) =>
{
    return accumulator+lastindex
}, 10)
console.log(d)

let arr8=[10,[20],30,40]
console.log(arr8.flat(Infinity))



