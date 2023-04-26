/* In your JavaScript console, execute the following two lines of code to check 
whether their return values differ and if so, how. Take a look at the MDN 
documentation on equality comparisons to read about how == and === differ. */

'8' == 8; // true
'8' === 8; // false

/* When using the == standard equality operator, JavaScript attempts to coerce 
the operands into two values of the same data type, prior to making a comparison. 
When dealing with a string and number, the string will get coerced into a number.

The === strict equality operator does not coerce the operands, so comparing a 
string and number will always return false. */
