// Write code that removes the items from 'groceryList' one by one, until it is empty.

let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

do {
  console.log(groceryList.shift());
} while (groceryList.length > 0);
