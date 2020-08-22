function sumItems(array) {
  // Sum all the numbers in the array
  let result = 0;
  array.forEach((el) => {
    if (Array.isArray(el)) {
      result += sumItems(el);
    } else {
      if (array.length) {
        result += el;
      }
    }
  });
  return result;
}
console.log(sumItems([[1, 2, [[3], 4]], 5, []]));

module.exports = sumItems;
