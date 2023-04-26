// What will the following code log to the console and why?

let a = 1;

function myFunction(a) {
  console.log(a);
}

let b = 2;

myFunction(b);

/* 2. The 'a' variable declared at the top of the code is different from the 'a' 
parameter used by myFunction. The 'a' parameter is a placeholder for whichever 
variable is passed to the function – in this case b, so the function will log 2. */