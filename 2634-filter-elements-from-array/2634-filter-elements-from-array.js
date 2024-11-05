/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
function filter(arr, fn) {
  const filteredArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) { // Check if fn returns a truthy value
      filteredArr.push(arr[i]); // Add to filteredArr if true
    }
  }
  return filteredArr;
}