// What will the following code log to the console and why?

let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b);

/* false. A new value of b was declared in the scope of the if statement. This cannot 
be accessed outside of the if statement, where the console.log function was called. 
The console log function can only access the initial variable b, assigned false. */