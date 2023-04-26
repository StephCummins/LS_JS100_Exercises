/* The MDN page for Date lists two methods to get the year of a date. What is 
the difference between the two methods and which one should you use? */

let today = new Date();

today.getYear();
today.getFullYear();

// .getYear() is deprecated and no longer recommended to use. It returns the 
// year for this date, according to local time; however, it does not return full 
// years and runs into the Y2K problem. In use, it returns a number representing 
// the year of the date, minus 1900. This means if the date is 2023, it returns 123.

// For this reason it has been replaced with .getFullYear(), which returns the 
// full year (as the name states). It returns 2023.
