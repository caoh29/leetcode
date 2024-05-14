class Calculator {
  constructor(value) {
    this.result = value;
  }
  
  add(value){
    this.result = this.result + value;
    return this;
  }
  
  subtract(value){
    this.result = this.result - value;
    return this;
  }
  
  multiply(value) {
    this.result = this.result * value;
    return this;
  }
  
  divide(value) {
    if (!value) throw new Error("Division by zero is not allowed");
    this.result = this.result / value;
    return this;
  }
  
  power(value) {
    this.result = this.result ** value;
    return this;
  }
  
  getResult() {
    return this.result;
  }
}


console.log(new Calculator(10).add(5).subtract(7).getResult())