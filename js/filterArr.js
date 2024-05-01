const filter = function(arr, fn) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

console.log(filter([0, 10, 20, 30], (n) => (n > 10)));