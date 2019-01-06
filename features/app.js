// create  symbol
const syml = Symbol();
const syml2 = Symbol('sym2');


console.log(typeof syml2);

// symbol are not enumrable
// symbols are ignored by json.stringify

// destructing assignment
let a,b;
[a,b] = [100,200];

// rest pattern 
[a,b,...rest] = [100,200,300,400,500];

console.log(c)

