/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
  const result = {};
  for (let i = 0; i < this.length; i++) {
    if (Object.hasOwn(result, fn(this[i]))) {
      result[fn(this[i])].push(this[i]);
    } else {
      result[fn(this[i])] = [this[i]];
    }
  }
  return result;
};

/**
* [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
*/

console.log([
  { "id": "1" },
  { "id": "1" },
  { "id": "2" }
].groupBy((item) => item.id));