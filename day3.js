const fs = require("fs")

const file = fs.readFileSync('day3_input.txt', 'utf8');

//part 1

function split(str, index) {
  const result = [str.slice(0, index), str.slice(index)];
  return result;
}

function addPoints(char) {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const value = alphabet.indexOf(char)
  totalPoints += (value+1)
}

let totalPoints = 0;
let found = false;

file.split("\n").forEach(element => { 
  const [first, second] = split(element, element.length/2);

  found = false;
  
  for (const a of first) {
    for (const b of second) {
      if (a === b && !found) {
        found = true;
        addPoints(a);
      }
    }
  }
})

console.log(totalPoints);

//part 2
totalPoints = 0;
let loopRounds = 0;
let threeRugSacks = [];

file.split("\n").forEach(element => { 

  threeRugSacks.push(element);
  loopRounds += 1;
  found = false;

  if (loopRounds > 2) {
    for (const a of threeRugSacks[0]) {
      for (const b of threeRugSacks[1]) {
        for (const c of threeRugSacks[2]) {
          if (a === b && a === c && b === c && !found) {
            addPoints(a);
            found = true;
          }
        }
      }
    }
    threeRugSacks = [];
    loopRounds = 0;
  }
})

console.log(totalPoints);