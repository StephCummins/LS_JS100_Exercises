/* Write a function that checks whether or not a particular destination is 
included within destinations, without using the built-in method 
Array.prototype.includes(). */

let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];
 
function destinationChecker(place) {
  for (let i = 0; i < destinations.length; i += 1) {
    if (place === destinations[i]) {
      return true;
    }
  } return false;
}

console.log(destinationChecker("Nashville"));