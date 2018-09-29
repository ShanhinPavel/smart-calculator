class SmartCalculator {
  constructor(initialValue) {
    // your implementation
    this._initialValue = initialValue;
    this._expressionValue = String(this._initialValue);
      }
//we difine function that out result on the screen. Default it is object.
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
    //first we check condition if the number is in degree.
    //We check last substring
    if (this._expressionValue[this._expressionValue.length - 1] === ")") {
      let temp = this._expressionValue[this._expressionValue.length - 2];
      temp = Math.pow(temp, number);
      let array1 = this._expressionValue.split('');
      array1.splice(array1.length - 2, 1, temp);
      this._expressionValue = array1.join('');

      //add string with Math.pow
    } else {
      let array = this._expressionValue.split(' ');
      let element = array.pop();
      element = +element;
      element = `Math.pow(${element}, ${number})`;
      array.push(element);
      this._expressionValue = array.join(' ');
    }
  return this;
  } 
}

module.exports = SmartCalculator;
