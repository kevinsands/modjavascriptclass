let x = 'abc';
console.log(` x is ${x}`);
console.log(`x is ${typeof x}`);
//console.info();
let y = 15;
console.log(`y is ${typeof y}`);
let z = new Date();
console.log(`z is ${typeof z}`);
console.log(`z is ${z}`);
z = null;
console.log(`z is ${typeof z}`);
console.log(`z is ${z}`);
x = null;
console.log(` x is ${x}`);
console.log(`x is ${typeof x}`);
let stringOne = '1';
let numOne = 1;
console.log(`double ==`, numOne== stringOne);
console.log(`triple ==`, numOne=== stringOne);

function displayName(name) {
    console.log('Hi ' + name);
}
x = "kevin";
displayName(x);
