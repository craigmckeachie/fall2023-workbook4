let count = 1;
let condition = true;
do {
  //will always run one time before checking the condition  
  console.log(`${count} bottles of birch beer on the wall.`);
  // count = count + 1;
  count++; //you increment to make it possible for the condition to eventually be false
  condition = count < 100;
} while (condition);
