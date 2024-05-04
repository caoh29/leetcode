const timeLimit = function(fn, t) {
  return async function(...args) {
    const controlPromise = new Promise((resolve, reject) => {
      setTimeout(reject, t, "Time Limit Exceeded");
    })
    return Promise.race([fn(...args), controlPromise])
  }
};