function repeat(numberOfTimes, string) {
  let newString = '';
  for (let i = 0; i < numberOfTimes; i += 1) {
    newString += string;
  }
  return newString;
}

console.log(repeat(3, 'ha')); // 'hahaha'