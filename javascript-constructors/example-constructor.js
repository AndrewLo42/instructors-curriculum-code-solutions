function ExampleConstructor() {

}

var example = new ExampleConstructor();

console.log('typeof example:', typeof example);
console.log('value of example:', example);

console.log('typeof example.__proto__', typeof example.__proto__);
console.log('value of example.__proto__', example.__proto__);

console.log('typeof ExampleConstructor.prototype:', typeof ExampleConstructor.prototype);
console.log('value of ExampleConstructor.prototype:', ExampleConstructor.prototype);

console.log('example instanceof ExampleConstructor', example instanceof ExampleConstructor);
