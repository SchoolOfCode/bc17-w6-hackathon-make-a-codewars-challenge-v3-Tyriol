/*

Welcome to the Statistics dojo!

Your training is about to begin...
You will face four challengers which will increase in difficulty.

For all of the challenges below you must throw an error ("Must be an array of numbers") if the input is not an array and the array does not only contain numbers

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

const isArrayOfNumbers = (array) => {
  if (!Array.isArray(array)) return false
  if (array.length === 0) return false
  if (array.find(val => !Number.isInteger(val))) return false
  return true
}

// Round 1: Mean function
export function calculateMean(array) {
  if (!isArrayOfNumbers(array)) throw new Error('Must be an array of numbers')

  return array.reduce((acc, val) => acc + val, 0) / array.length
}

// Round 2: Median function
export function calculateMedian(array) {
  if (!isArrayOfNumbers(array)) throw new Error('Must be an array of numbers')

  const sortedArray = array.toSorted((a, b) => a - b)
  if (sortedArray.length % 2 === 1) {
    const middleIndex = Math.floor(sortedArray.length / 2)
    return sortedArray[middleIndex]
  }

  const middleIndex = sortedArray.length / 2;
  return calculateMean([sortedArray[middleIndex], sortedArray[middleIndex - 1]])
}

// Round 3: Range function
export function calculateRange(array) {
  if (!isArrayOfNumbers(array)) throw new Error('Must be an array of numbers')

  const sortedArray = array.toSorted((a, b) => a - b)
  const min = sortedArray[0]
  const max = sortedArray[sortedArray.length - 1]

  return max - min
}

// Round 4: Mean, median and range object funtion
export function calculateMeanMedianRange(array) {
  return {
    mean: calculateMean(array),
    median: calculateMedian(array),
    range: calculateRange(array)
  }
}
