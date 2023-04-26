/* Look up the MDN documentation for the typeof operator. What is its return 
value? Determine what the following statements will return: */

// The typeof operator returns a string indicating the type of the operand’s value.

typeof 23.5; // “number”
typeof 'Call me Ishmael.'; // “string”
typeof false; // “boolean”
typeof 0; // “number”
typeof null; // “object” – note that this is a historic bug that it’s too late to change without breaking existing code
typeof undefined; // “undefined”
