//number data type
console.log(typeof 10);
console.log(typeof -10);
console.log(typeof 0.5);

//string data-type
let a='hello'
console.log(a);
console.log(typeof a);

let b="hello"
console.log( b);
console.log(typeof b);

let c=`hello`
console.log(c);
console.log(typeof c);

let d=`i am
a
developer`
console.log(d);

let m = 10;
let n = 20;
let o = m + n;
console.log(o);
console.log(`Sum of ${m} and ${n} is =${o}`);

//undefined
let z;
console.log(z);
console.log(typeof z);

//null
let e = null
console.log(e);
console.log(typeof e);

//boolean
console.log(typeof true);
console.log(typeof false);

console.log((undefined)? true : false);
console.log((0)? true : false);
console.log((null)? true : false);
console.log((10)? true : false);


//big-int
console.log(typeof 10n);

//symbol
let f = Symbol('hello')
console.log(f);

let g = Symbol('hello')
console.log(g);

console.log(f === g);   //false
console.log(f == f);    //true

//Type-casting
//Implict Type-casting
console.log(5+5);
console.log(5+'5');
console.log(5-'5');
console.log(5+'a');
console.log(5-'a');
console.log(typeof NaN) //number

//Explict Type-casting
console.log(5+Number('5'));
console.log(String(5)+6);

console.log(Boolean(0));    //false
console.log(Boolean (undefined));  //false
console.log(Boolean (null));    //false
console.log(Boolean (NaN));     //false
console.log(Boolean (false));   //false
//for default in JS above all considered as false
