class SmartCalculator {
  constructor(initialValue) {
    // your implementation
    this._initialValue = initialValue;
    this._expressionValue = String(this._initialValue);
      }

  toString() {
    this._expressionValue = eval(this._expressionValue);
    return this._expressionValue;
  }

  valueOf() {
    this._expressionValue = eval(this._expressionValue);
    return this._expressionValue;
  }

  add(number) {
      this._expressionValue = this._expressionValue + " + " +number;
      return this;
    }

  subtract(number) {
    this._expressionValue = this._expressionValue + " - " +number;
    return this;
  }

  multiply(number) {
    this._expressionValue = this._expressionValue + " * " +number;
    return this;
  }

  devide(number) {
    this._expressionValue = this._expressionValue + " / " +number;
    return this;
  }

  pow (number) {
    
    let array = this._expressionValue.split(" ");
    let element = array.pop();
    element = +element;
    let pow = Math.pow(element, number);
    array.push(pow);
    this._expressionValue = array.join(" ");
    return this;
  }
  }

module.exports = SmartCalculator;
