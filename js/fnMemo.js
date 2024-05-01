function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = args.toString();
    if (key in cache) {
      return cache[key];
    }
    cache[key] = fn.apply(this, args);
    return cache[key];
  }
}