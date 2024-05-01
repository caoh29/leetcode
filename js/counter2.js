const createCounter = function (init) {
  return {
    count: init,
    increment: function () {
      return ++this.count;
    },
    decrement: function() {
      return --this.count;
    },
    reset: function() {
      this.count = init;
      return this.count;
    }
  };
};

const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4