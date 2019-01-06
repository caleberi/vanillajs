const name =  'John';
const age =  30;
const job = 'Web Developer';
const city = 'Miami';
let html ;

// without template string(es5)

html = 'My name is ' + name + '. I am a ' + age + ' years old '+ job + ' who stays in ' + city;
console.log(html);
html = `My name is ${name} .  I am a ${age} years old ${job} who stays in ${city}`;

console.log(html);

//Array 
const numbers =  [1,2,4,5,64,67];
const numbers2 = new Array(22,45,65,75,76);
const fruit = ['Yam','Egg','Orange']

console.log(numbers.length);
console.log(Array.isArray(fruit));
console.log(numbers.indexOf(2));
console.log(numbers.push(90));
console.log(numbers.unshift(0));
console.log(numbers.pop());
console.log(fruit.splice(1,2));
console.log(numbers2.reverse());
console.log(numbers.concat(fruit));
console.log(numbers.sort(function(x,y){
    return x - y
}));

console.log(numbers.sort(function(x,y){
    return y-x
}));

// Dates

console.log(new Date());