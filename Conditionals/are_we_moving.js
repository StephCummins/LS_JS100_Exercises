// Determine what the following code snippet logs:

let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);

console.log(isMoving);

// logs true

// Do we need the parentheses in the boolean expression or could we also have written the following?

let isMoving = brakingForce < acceleration && speed > 0 || acceleration > 0;

// we need the parentheses, otherwise && will be evaluated before ||, due to the operator preference