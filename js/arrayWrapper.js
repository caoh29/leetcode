/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function(nums) {
  this.arr = nums;
};

/**
* @return {number}
*/
ArrayWrapper.prototype.valueOf = function() {
  return this.arr.reduce((a, b) => a + b, 0);
}

/**
* @return {string}
*/
ArrayWrapper.prototype.toString = function() {
  return `[${this.arr}]`
}


const obj1 = new ArrayWrapper([1,2]);
const obj2 = new ArrayWrapper([3,4]);
console.log(obj1 + obj2); // 10
console.log(String(obj1)); // "[1,2]"
console.log(String(obj2)); // "[3,4]"
