class EventEmitter {
  queu = {};
  /**
    * @param {string} eventName
    * @param {Function} callback
    * @return {Object}
    */
  subscribe(eventName, callback) {
    if (!this.queu[eventName]) {
      this.queu[eventName] = [callback]
    } else {
      this.queu[eventName] = [...this.queu[eventName], callback]
    }
    return {
      unsubscribe: () => {
        this.queu[eventName].splice(this.queu[eventName].indexOf(callback), 1);
      }
    };
  }
    
  /**
    * @param {string} eventName
    * @param {Array} args
    * @return {Array}
    */
  emit(eventName, args = []) {
    if (!this.queu[eventName]) return [];
    return this.queu[eventName].map((callback) => (callback(...args)));
  }
}


const emitter = new EventEmitter();
// Subscribe to the onClick event with onClickCallback
function onClickCallback() { return 99 }
const sub = emitter.subscribe('onClick', onClickCallback);
console.log(emitter.emit('onClick')); // [99]
sub.unsubscribe(); // undefined
console.log(emitter.emit('onClick')); // []
