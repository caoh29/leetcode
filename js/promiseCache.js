class TimeLimitedCache {
  constructor(){
    this.cache = new Map();
  }

  set(key,value,duration){
    const alreadyexist = this.cache.get(key)
    if(alreadyexist){
      clearTimeout(alreadyexist.timeoutid)
    } 

    const timeoutid = setTimeout(() => {
      this.cache.delete(key)
    }, duration)

    this.cache.set(key,{value,timeoutid})
    return Boolean(alreadyexist)
  } 

  get(key){
    if(this.cache.has(key)){
      return this.cache.get(key).value
    }
    return -1
  }

  count(){
    return this.cache.size;
  }
}


///////////////////////////////////////////////////////

var TimeLimitedCache = function() {
  this.cache = {};
};

/** 
* @param {number} key
* @param {number} value
* @param {number} duration time until expiration in ms
* @return {boolean} if un-expired key already existed
*/
TimeLimitedCache.prototype.set = function(key, value, duration) {
  if(Object.hasOwn(this.cache, key)) {
      clearTimeout(this.cache[key].id);
      this.cache[key].value = value;
      this.cache[key].id = setTimeout(() => {
        delete this.cache[key];
      }, duration);
      return true;
  } else {
      this.cache[key] = {
          value,
          id: setTimeout(() => {
            delete this.cache[key];
          }, duration)
      };
      return false;
  }
};

/** 
* @param {number} key
* @return {number} value associated with key
*/
TimeLimitedCache.prototype.get = function(key) {
  if (Object.hasOwn(this.cache, key)) return this.cache[key].value;
  return -1;
};

/** 
* @return {number} count of non-expired keys
*/
TimeLimitedCache.prototype.count = function() {
  return Object.keys(this.cache).length;
};

/**
* const timeLimitedCache = new TimeLimitedCache()
* timeLimitedCache.set(1, 42, 1000); // false
* timeLimitedCache.get(1) // 42
* timeLimitedCache.count() // 1
*/