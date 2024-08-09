import { test, expect } from "vitest";
import {
  calculateMean,
  calculateMedian,
  calculateRange,
  calculateMeanMedianRange,
} from "./main.js";

test("barebones and all", () => {});

// test for the mean
test("The mean of the array is output", () => {
  expect(calculateMean([15, 25, 5, 10])).toBe(13.75);
});

// test for the median
test("The median of the array is output", () => {
  expect(calculateMedian([15, 25, 7, 5, 10])).toBe(10);
});

// test for the range
test("The range of the array is 20", () => {
  expect(calculateRange([15, 25, 7, 5, 10])).toBe(20);
});

// test for the object containing the mean, median and range
test("The array returns and object with the keys: mean, median and range and the correct values", () => {
  expect(calculateMeanMedianRange([15, 25, 5, 10])).toMatchObject({
    mean: 13.75,
    median: 12.5,
    range: 20,
  });
});
