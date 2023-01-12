const fs = require("fs")

const file = fs.readFileSync('day5_input.txt', 'utf8');

//part 1

let rules = [];

file.split("\n").forEach(element => { 
  const rule = element.split(/move | from | to /);
  rule.splice(0, 1);
  rules.push(rule);
})

let stacks = [
  ["D", "T", "W", "F", "J", "S", "H", "N"],
  ["H", "R", "P", "Q", "T", "N", "B", "G"],
  ["L", "Q", "V"],
  ["N", "B", "S", "W", "R", "Q"],
  ["N", "D", "F", "T", "V", "M", "B"],
  ["M", "D", "B", "V", "H", "T", "R"],
  ["D", "B", "Q", "J"],
  ["D", "N", "J", "V", "R", "Z", "H", "Q"],
  ["B", "N", "H", "M", "S"]
]

function moveCrates(rule) {
  const cratesToMove = parseInt(rule[0]);
  const fromIndex = parseInt(rule[1])-1;
  const toIndex = parseInt(rule[2])-1;

  for (let index = 0; index < cratesToMove; index++) {
    const crate = stacks[fromIndex].pop();
    stacks[toIndex].push(crate);
  }
}

rules.forEach(rule => {
  moveCrates(rule);
});

let topsOfEachStack = [];

stacks.forEach(element => {
  topsOfEachStack.push(element[element.length-1]);
});

console.log(topsOfEachStack);

//part 2

stacks = [
  ["D", "T", "W", "F", "J", "S", "H", "N"],
  ["H", "R", "P", "Q", "T", "N", "B", "G"],
  ["L", "Q", "V"],
  ["N", "B", "S", "W", "R", "Q"],
  ["N", "D", "F", "T", "V", "M", "B"],
  ["M", "D", "B", "V", "H", "T", "R"],
  ["D", "B", "Q", "J"],
  ["D", "N", "J", "V", "R", "Z", "H", "Q"],
  ["B", "N", "H", "M", "S"]
]

function moveCratesAgain(rule) {
  const cratesToMove = parseInt(rule[0]);
  const fromIndex = parseInt(rule[1])-1;
  const toIndex = parseInt(rule[2])-1;

  if (cratesToMove === 1) {
    const crate = stacks[fromIndex].pop();
    stacks[toIndex].push(crate);
  } else {
    const crates = stacks[fromIndex].splice(-cratesToMove);
    stacks[toIndex].push(...crates);
  }
}

rules.forEach(rule => {
  moveCratesAgain(rule);
});

topsOfEachStack = [];

stacks.forEach(element => {
  topsOfEachStack.push(element[element.length-1]);
});

console.log(topsOfEachStack);