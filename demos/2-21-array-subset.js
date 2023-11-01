//laundry
let menuItems = [
  { id: 1, item: "Tacos", category: "Meal", price: 12.29 }, //menuItem
  { id: 2, item: "Burger", category: "Meal", price: 7.29 }, //menuItem
  { id: 3, item: "Salad", category: "Meal", price: 8.29 }, //menuItem
  { id: 4, item: "Ice tea", category: "Drink", price: 2.19 },
  { id: 5, item: "Coke", category: "Drink", price: 2.29 },
];

function getMenuItemsInCategory(menuItems, category) {
  //unmentionables
  //this is an empty array that is going to store a subset of items from the bigger array
  let matchingMenuItems = [];

  //for of   one object/item of array (list/collection)
  for (const menuItem of menuItems) {
    //checking if an item meets a condition, for example is it in a category
    if (menuItem.category == category) {
      // adding an item to the list
      matchingMenuItems.push(menuItem);
    }
  }

  //for loop
  //   for (let index = 0; index < menuItems.length; index++) {
  //     const menuItem = menuItems[index];
  //     if (menuItem.category == category) {
  //       matchingMenuItems.push(menuItem);
  //     }
  //   }
 //returning matching items so that they can be caught when the function is called
  return matchingMenuItems;
}

//catching matching array into a variable = calling a function by its name then () and passing parameters into the function
let drinks = getMenuItemsInCategory(menuItems, "Drink");
console.log(drinks);
// let meals = getMenuItemsInCategory(menuItems, "Meal");
// console.log(meals);
