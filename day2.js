//part 1

const fs = require("fs")

const file = fs.readFileSync('day2_input.txt', 'utf8');

let totalScore = 0;

file.split("\n").forEach(element => {
  if (element.includes("A Y") || element.includes("B Z") || element.includes("C X")) {
    totalScore += 6
  }
  if (element.includes("A X") || element.includes("B Y") || element.includes("C Z")) {
    totalScore += 3
  } 
  element.includes("X") ? 
    totalScore += 1 : 
      element.includes("Y") ? 
        totalScore += 2 : 
          totalScore += 3
});

console.log(totalScore);

//part 2

totalScore = 0;

file.split("\n").forEach(element => {

  if (element.includes("Z")) {
    totalScore += 6
    element.includes("A") ? 
      totalScore += 2 : 
        element.includes("B") ?
          totalScore += 3 :
            totalScore += 1
  }
  if (element.includes("Y")) {
    totalScore += 3
    element.includes("A") ? 
      totalScore += 1 : 
        element.includes("B") ?
          totalScore += 2 :
            totalScore += 3
  }
  if (element.includes("X")) {
    element.includes("A") ? 
      totalScore += 3 : 
        element.includes("B") ?
          totalScore += 1 :
            totalScore += 2
  }
});

console.log(totalScore);