// What will the following code log to the console and why?

const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a);

// This will log: {firstName: “Jane”, lastName: “Doe”} 
// While variable “a” is declared as a constant, an object's values can be changed. 