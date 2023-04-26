/* In the following code snippet, find all violations of the style guide. 
Rewrite it so that it conforms with the guide. */

// ORIGINAL
let ice_cream_taste = 'chocolate' // need to use camelCase and ;
let ice_cream_density = 10 // need to use camelCase and ;

while(ice_cream_density > 0) // curly brackets should be on this line; space after while
{
    console.log('Drip...');
    ice_cream_density -= 1;
}

console.log('The '+ ice_cream_taste +' ice cream melted.');

// UPDATED VERSION
let iceCreamTaste = "chocolate";
let iceCreamDensity = 10;

while (iceCreamDensity > 0) {
	console.log("Drip...");
	iceCreamDensity -=1;
}

console.log(`The ${iceCreamTaste} ice cream melted.`);
