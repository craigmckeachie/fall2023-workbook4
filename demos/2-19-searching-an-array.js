"use strict";

let teams = ["Red Sox", "Rangers", "Blue Jays", "Astros", "White Sox", "Rangers"];
let index = teams.indexOf("Rangers"); // returns 1
if (index == -1) {
  console.log("Item not found");
} else {
  console.log("Item at position: " + index);
}
