// Write a function that checks whether a string is empty or not.

/* Solution 1:
function isBlank(string) {
  if (string.length > 0) {
    return false;
  } else {
    return true;
  }
} */

// Solution 2:
function isBlank(string) {
  return string.length === 0;
}

console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // false
console.log(isBlank(''));     // true

