/*

Welcome to the Statistics dojo!

Your training is about to begin...
You will face four challengers which will increase in difficulty.

For all of the challenges below you must throw an error if the input is not an array of numbers

-- Challenge One --
Create a function that takes in an array of numbers and returns the mean (average) of those numbers.
** Example **
[10, 4, 6, 9, 20] --> 9.8

-- Challenge Two --
Create a function that takes in an array of numbers and returns the median (the middle number in a sorted list of numbers) of those numbers.
If the array contains an even amount of numbers, it should return the average of the two middle numbers
** Example **
[10, 4, 6, 9, 20] --> 9

-- Challenge Three --
Create a function that takes in an array of numbers and returns the range (difference between the highest and lowest number) of those numbers.
** Example **
[10, 4, 6, 9, 20] --> 16

-- Challenge Four --
Create a function that combines the work you've done above. It should take in an array of numbers and return an object that contains the 
mean,median and range of those numbers
** Example **
[10, 4, 6, 9, 20] --> {
mean: 9.8,
median: 9,
range: 16
}

*/

// Round 1: Mean function
export function calculateMean(array) {
  // Ready...fight!
  if (!Array.isArray(array)) {
    throw new Error("Must be an array of numbers");
  }
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== "number") {
      throw new Error("Must be an array of numbers");
    }
  }
  const mean = array.reduce((a, b) => a + b) / array.length;
  return mean;
}

// Round 2: Median function
export function calculateMedian(array) {
  // Ready...fight!
  if (!Array.isArray(array)) {
    throw new Error("Must be an array of numbers");
  }
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== "number") {
      throw new Error("Must be an array of numbers");
    }
  }
  array.sort((a, b) => a - b);
  let median;
  let midIndex;
  if (array.length % 2 === 0) {
    midIndex = array.length / 2 - 1;
    const highMidIndex = Math.ceil(array.length / 2);
    median = (array[midIndex] + array[highMidIndex]) / 2;
  } else {
    midIndex = Math.floor(array.length / 2);
    median = array[midIndex];
  }
  return median;
}

// Round 3: Range function
export function calculateRange(array) {
  // Ready...fight!
  if (!Array.isArray(array)) {
    throw new Error("Must be an array of numbers");
  }
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== "number") {
      throw new Error("Must be an array of numbers");
    }
  }
  array.sort((a, b) => a - b);
  const lastNumberIndex = array.length - 1;
  const range = array[lastNumberIndex] - array[0];
  return range;
}

// Round 4: Mean, median and range object funtion
export function calculateMeanMedianRange(array) {
  // Ready...fight!
  if (!Array.isArray(array)) {
    throw new Error("Must be an array of numbers");
  }
  const centralTendency = {};
  centralTendency.mean = calculateMean(array);
  centralTendency.median = calculateMedian(array);
  centralTendency.range = calculateRange(array);
  return centralTendency;
}
calculateMedian([15, 25, 5, 10]);
