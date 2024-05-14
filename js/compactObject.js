const compactObject = function (obj) {
  if (Array.isArray(obj)) {
    return obj.filter((val) => val).map(val => {
    if (typeof val === 'object') {
        return compactObject(val);
      }
      return val;
    });
  }

  for (const key in obj) {
    if (!obj[key]) {
      delete obj[key];
      continue
    }

    if (typeof obj[key] === 'object') {
      obj[key] = compactObject(obj[key]);
    }
  }
  return obj;
};

console.log(compactObject([null, 0, false, 1]));
console.log(compactObject({"a": null, "b": [false, 1]}));
console.log(compactObject([null, 0, 5, [0], [false, 16]]));