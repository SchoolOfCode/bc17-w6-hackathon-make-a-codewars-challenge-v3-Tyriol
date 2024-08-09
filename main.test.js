import { test, expect } from "vitest";
import {
  calculateMean,
  calculateMedian,
  calculateRange,
  calculateMeanMedianRange,
} from "./main.js";

// test for the mean
test.each([
  [[15, 25, 5, 10], 13.75],
  [[1, 5, 3, 9, 7], 5],
  [[20, 57], 38.5],
])("The mean of the array %s is %s", (arr, expected) => {
  expect(calculateMean(arr)).toBe(expected);
});

// test for the median
test.each([
  [[15, 25, 5, 10], 12.5],
  [[1, 5, 3, 9, 7], 5],
  [[20, 57], 38.5],
])("The median of the array %s is %s", (arr, expected) => {
  expect(calculateMedian(arr)).toBe(expected);
});

// test for the range
test.each([
  [[15, 25, 5, 10], 20],
  [[1, 5, 3, 9, 7], 8],
  [[20, 57], 37],
])("The range of the array %s is %s", (arr, expected) => {
  expect(calculateRange(arr)).toBe(expected);
});

// test for the object containing the mean, median and range
test("The array returns and object with the keys: mean, median and range and the correct values", () => {
  expect(calculateMeanMedianRange([15, 25, 5, 10])).toMatchObject({
    mean: 13.75,
    median: 12.5,
    range: 20,
  });
});

// Error testing
// Mean
test("Test that an error is thrown if the input is not an array", () => {
  expect(() => calculateMean(1, 2, 3)).toThrowError(
    "Must be an array of numbers"
  );
});

test("Test that the mean function throws an error if the input is not an array of numbers", () => {
  expect(() => calculateMean([1, "two", 3])).toThrowError(
    "Must be an array of numbers"
  );
  expect(() => calculateMean([1, "4", 3])).toThrowError(
    "Must be an array of numbers"
  );
});

// Median
test("Test that an error is thrown if the input is not an array", () => {
  expect(() => calculateMedian(1, 2, 3)).toThrowError(
    "Must be an array of numbers"
  );
});

test("Test that the median function throws an error if the input is not an array of numbers", () => {
  expect(() => calculateMedian([1, "two", 3])).toThrowError(
    "Must be an array of numbers"
  );
  expect(() => calculateMedian([1, "4", 3])).toThrowError(
    "Must be an array of numbers"
  );
});

// Range
test("Test that an error is thrown if the input is not an array", () => {
  expect(() => calculateRange(1, 2, 3)).toThrowError(
    "Must be an array of numbers"
  );
});

test("Test that the range function throws an error if the input is not an array of numbers", () => {
  expect(() => calculateRange([1, "two", 3])).toThrowError(
    "Must be an array of numbers"
  );
  expect(() => calculateRange([1, "4", 3])).toThrowError(
    "Must be an array of numbers"
  );
});

// Mean median and range
test("Test that an error is thrown if the input is not an array", () => {
  expect(() => calculateMeanMedianRange(1, 2, 3)).toThrowError(
    "Must be an array of numbers"
  );
});

test("Test that the meanMedianRange function throws an error if the input is not an array of numbers", () => {
  expect(() => calculateMeanMedianRange([1, "two", 3])).toThrowError(
    "Must be an array of numbers"
  );
  expect(() => calculateMeanMedianRange([1, "4", 3])).toThrowError(
    "Must be an array of numbers"
  );
});

// expect(() => calculateMean([])).toThrowError("Must be an array of numbers");
