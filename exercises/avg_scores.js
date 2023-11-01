"use strict";

let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92];

function getAverage(scores) {
  let total = 0;

  for (let index = 0; index < scores.length; index++) {
    const score = scores[index];
    total += score;
  }

  let average = total / scores.length;
  return average;
}

const myAverage = getAverage(myScores);
console.log(`My average score was: ${myAverage.toFixed(2)}`);
const yourAverage = getAverage(yourScores);
console.log(`My average score was: ${yourAverage.toFixed(2)}`);
