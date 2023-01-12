const fs = require("fs")

const file = fs.readFileSync('day4_input.txt', 'utf8');

//part 1

let elves = [];
let assignmentPairs = 0;

file.split("\n").forEach(element => { 
  const elfPair = element.split(/-|,/);
  elves.push(elfPair);
})

elves.forEach(element => {
  const firstElfLowerLimit = parseInt(element[0]);
  const firstElfUpperLimit = parseInt(element[1]);
  const secondElfLowerLimit = parseInt(element[2]);
  const secondElfUpperLimit = parseInt(element[3]);

  const firstElfArray = createArray(firstElfLowerLimit, firstElfUpperLimit);
  const secondElfArray = createArray(secondElfLowerLimit, secondElfUpperLimit);

  // if (((firstElfLowerLimit >= secondElfLowerLimit) && (firstElfUpperLimit <= secondElfUpperLimit)) || ((secondElfLowerLimit >= firstElfLowerLimit) && (secondElfUpperLimit <= firstElfUpperLimit))) {
  //   assignmentPairs += 1;
  // }
  if ((firstElfArray.includes(secondElfLowerLimit) && firstElfArray.includes(secondElfUpperLimit)) || (secondElfArray.includes(firstElfLowerLimit) && secondElfArray.includes(firstElfUpperLimit)))  {
    assignmentPairs += 1;
  }
});

console.log(assignmentPairs);

//part 2

assignmentPairs = 0;

function createArray(start, end) {
  const length = end-start;
  let array = [];
  let item = start;
  for (let index = 0; index <= length; index++) {
    array.push(item);
    item++;
  }
  return array;
}

console.log(createArray(1, 6))

elves.forEach(element => {
  const firstElfLowerLimit = parseInt(element[0]);
  const firstElfUpperLimit = parseInt(element[1]);
  const secondElfLowerLimit = parseInt(element[2]);
  const secondElfUpperLimit = parseInt(element[3]);

  const firstElfArray = createArray(firstElfLowerLimit, firstElfUpperLimit);
  const secondElfArray = createArray(secondElfLowerLimit, secondElfUpperLimit);

  // if (firstElfArray.filter(element => secondElfArray.includes(element)).length) {
  //   assignmentPairs += 1;
  // }
  if (firstElfArray.includes(secondElfLowerLimit || secondElfUpperLimit) || secondElfArray.includes(firstElfLowerLimit || firstElfUpperLimit)) {
    assignmentPairs += 1;
  }
});

console.log(assignmentPairs);