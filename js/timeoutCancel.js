const cancellable = function (fn, args, t) {
  // const timeout_id = setTimeout(() => fn(...args), t);
  const timeout_id = setTimeout(() => fn.apply(this, args), t);
  return () => clearTimeout(timeout_id);
};