const flat = function (arr, n) {
  if (n === 0) return arr;
  const result = [];
  for (const element of arr) {
    if (Array.isArray(element) && n > 0) {
      // for (let i = 0; i < n; i++) {
      //   for (let j = 0; j < element.length; j++) {
      //     !Array.isArray(element[j]) && result.push(element[j]); 
      //   }
      // }
      result.push(...flat(element, n - 1));
    } else {
      result.push(element);
    }
  }
  return result;
};

console.log(flat([1,2,3,[4,5,6],[7,8,[9,10,11],12],[13,14,15]], 2));