// Given strings like the following, how can you check whether they're equal 
// irrespective of whether the characters they contain are upper or lower case?

let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';

if (string1.toLowerCase() === string2.toLowerCase()) {
  console.log(`${string1} and ${string2} are equal`)
} else {
  console.log(`${string1} and ${string2} are not equal`)
}

if (string1.toLowerCase() === string3.toLowerCase()) {
  console.log(`${string1} and ${string3} are equal`)
} else {
  console.log(`${string1} and ${string3} are not equal`)
}

if (string2.toLowerCase() === string3.toLowerCase()) {
  console.log(`${string2} and ${string3} are equal`)
} else {
  console.log(`${string2} and ${string3} are not equal`)
}