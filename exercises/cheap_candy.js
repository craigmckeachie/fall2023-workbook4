let products = [
  { product: "Gummy Worms", price: 5.79 },
  { product: "Plain M&Ms", price: 2.89 },
  { product: "Peanut M&Ms", price: 2.89 },
  { product: "Swedish Fish", price: 3.79 },
];
// for (const candy of products) {
//   if (candy.price < 4) {
//     console.log(candy.product, candy.price)
//   }
// }

function isCandyMM(candy) {
  return candy.product.indexOf("M&Ms") != -1;
}

for (const candy of products) {
  if (isCandyMM(candy)) {
    console.log(candy.product);
  }
}
