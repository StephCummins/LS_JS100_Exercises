// What will the following code log to the console and why? 

function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
  }
}

myFunction();

// It logs 1, the value of a. Variable a is declared in the function, so it can be 
// accessed in the inner scope when console.log refers to the value of a.