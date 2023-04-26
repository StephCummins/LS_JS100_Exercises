// What will the following code log to the console and why?

if (true) {
  let myValue = 20;
}

console.log(myValue);

/* When the console.log function is called, myValue hasn’t yet been defined, so it 
will result in an error message. The myValue variable isn’t initialized until the body 
of the if statement, and it’s only available in that block scope. */