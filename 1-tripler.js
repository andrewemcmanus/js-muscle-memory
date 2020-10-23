/*******************************************************************************
Write a function tripler(array) that takes in an array and returns a new array
containing 3 times every element of the original array.

Examples:

tripler([1,2,3]); // => [ 3, 6, 9 ]
tripler([4, 1, 7]); // => [ 12, 3, 21 ]
*******************************************************************************/

function tripler(array) {
  const result = [];
  console.log('Inside of tripler function');
  for (let i = 0; i < array.length; i++) {
      let num = array[i];
      let multiple = num * 3;
      result.push(multiple);
  }
  return result;
}

console.log(tripler([1,2,3])); // => [ 3, 6, 9 ]
console.log(tripler([4, 1, 7])); // => [ 12, 3, 21 ]