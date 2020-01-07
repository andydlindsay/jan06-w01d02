/**
[ ] 1 need to be able to read in unlimited number of cli arguments
[ ] 2 go through arguments
[ ] 3 sum the arguments
[ ] 4 store the arguments
[x] 5 determine if the argument is a whole number
[ ] 6 test for negative numbers
[ ] 7 transform the arguments from strings to numbers
 */

// an array of values
const testWholeNumber = function (num) {
  if (Number.isInteger(num)) {
    return num;
  }
  return 0;
};

console.log('7.5', testWholeNumber(7.5));
console.log('9', testWholeNumber(9));
