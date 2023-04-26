// What will the following code log to the console and why?
console.log(greeting);

var greeting = 'Hello world!';

// All variables declared with var are virtually moved to the beginning of the scope.
// In this instance, the var greeting is declared but not assigned prior to the calling the function.
// When you call the console.log function, var is still undefined until line 4, when it's assigned to
// "Hello world!"

