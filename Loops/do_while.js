/* What is the difference between the following two code snippets? */

// This is a while loop. Because it checks the condition before running, this loop won't run at all.
let counter = 0;

while (counter > 0) {
  console.log('Woooot!');
  counter -= 1;
}
// Won't log anything

/* This is a do/while loop. It will execute the code at least once, prior to checking
if a condition is satisfied */
let counter2 = 0;

do {
  console.log('Woooot!');
  counter2 -= 1;
} while (counter2 > 0);
// Will log "Woooot!" once