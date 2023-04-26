// Before running any code, determine what difference there will be in the output of the two code snippets below (if any).

// Code 1
let ocean = {};
let prefix = 'Indian';

ocean.prefix = 'Pacific';

console.log(ocean); // {prefix: "Pacific"}

// Code 2
let ocean = {};
let prefix = 'Indian';

ocean[prefix] = 'Pacific';

console.log(ocean); // {"Indian": "Pacific"}