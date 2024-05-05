const debounce = function(fn, t) {
  let id;
  let isCalled = false;
  return function(...args) {
    if (isCalled) {
      clearTimeout(id);
      id = setTimeout(() => {
        fn(...args);
        isCalled = false;
      }, t);
      isCalled = true;
    } else {
      id = setTimeout(() => {
        fn(...args);
        isCalled = false;
      }, t);
      isCalled = true;
    }
  }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */