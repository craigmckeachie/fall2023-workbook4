let menuItems = [
  { id: 1, item: "Tacos", category: "Meal", price: 12.29 }, //menuItem
  { id: 2, item: "Burger", category: "Meal", price: 7.29 }, //menuItem
  { id: 3, item: "Salad", category: "Meal", price: 8.29 }, //menuItem
  { id: 4, item: "Ice tea", category: "Drink", price: 2.19 },
  { id: 5, item: "Coke", category: "Drink", price: 2.29 },
];

let menuItems2 = ["Tacos", "Burgers", "Salad"]

function getMenuItemsInCategory(menuItems, category) {
  let matchingMenuItems = [];
 
  for (const menuItem of menuItems) {
    if (menuItem.category == category) {
        matchingMenuItems.push(menuItem);
    }
  }  

  for (let index = 0; index < menuItems.length; index++) {
    const menuItem = menuItems[index];
    console.log(menuItem);
  }

  return matchingMenuItems;
}

let drinks = getMenuItemsInCategory(menuItems, "Drink");
console.log(drinks);
// let meals = getMenuItemsInCategory(menuItems, "Meal");
// console.log(meals);

