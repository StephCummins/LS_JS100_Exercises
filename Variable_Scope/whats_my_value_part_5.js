// What will the following code log to the console and why?

function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}

myFunction();

/* An error message will occur. By declaring a new variable a on line 8, this variable
shadows the one declared on line 4. Code in the if statement now only looks at the value of a
on line 8, and since the value wasn't declared prior to line 7, it results in an error. */