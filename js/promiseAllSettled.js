const promiseAll = function(functions) {
  return new Promise((resolve, reject) => {
    const results = [];
    let count = 0;
    functions.forEach((fn, i) => {
      fn()
      .then(value => {
        results[i] = value;
        count++;
        if(count === functions.length) resolve(results);
      })
      .catch(reason => reject(reason));
    });
  });
};


const promise = promiseAll([
  () => new Promise(resolve => setTimeout(() => resolve(1), 200)), 
  () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100))
])
promise.then(console.log);
