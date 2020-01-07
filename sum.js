/**
[x] 1 need to be able to read in unlimited number of cli arguments
[x] 2 go through arguments
[x] 3 sum the arguments
[x] 4 store the arguments
[x] 5 determine if the argument is a whole number
[ ] 6 test for negative numbers
[x] 7 transform the arguments from strings to numbers
[ ] 8 console.log the sum
 */

// need to be able to read in unlimited number of cli arguments
const arguments = process.argv.slice(2);

// an array of values
const testWholeNumber = function (num) {
  if (Number.isInteger(num)) {
    return num;
  }
  return 0;
};

// transform the arguments from strings to numbers
const convertToNumbers = function (arr) {
  const returnArray = [];
  for (let i = 0; i < arr.length; i++) {
    const value = Number(arr[i]);
    if (value) {
      const wholeNumber = testWholeNumber(value);
      returnArray.push(wholeNumber);
    };
  }
  return returnArray;
};

const converted = convertToNumbers(arguments);

// go through arguments
// sum the arguments
const sum = function (arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
};

console.log(sum(converted));
