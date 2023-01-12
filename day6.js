const fs = require("fs")

const datastream = fs.readFileSync('day6_input.txt', 'utf8');

//part 1

function getSequencesWithLength(length) {
  let sequences = [];
  for (let indexOfAll = 0; indexOfAll < datastream.length; indexOfAll++) {
    let sequenceOfFour = [];
    for (let indexOfFour = 0; indexOfFour < length; indexOfFour++) {
      sequenceOfFour.push(datastream[indexOfAll+indexOfFour]);  
    }
    sequences.push(sequenceOfFour);
  }
  return sequences;
}

function hasDuplicates(array) {
  return (new Set(array)).size !== array.length;
}

function calculateLengthBeforeMarker(array) {
  let count = 0;
  let firstFound = false;
  array.forEach(sequence => {
    if (hasDuplicates(sequence) && !firstFound) {
      count++;
    } else if (!firstFound) {
      count += sequence.length;
      firstFound = true;
    }
  });
  return count;
}

console.log(calculateLengthBeforeMarker(getSequencesWithLength(4)));

//part 2

console.log(calculateLengthBeforeMarker(getSequencesWithLength(14)));