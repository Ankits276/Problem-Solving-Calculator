/**
 *  Algo for create a funtion for calculator
 * Step 1 :- Check if operand is not a valid number
 * Step 1.1 :- If true, return plese enter correct value
 * Step 3 :- Check If operator is not available
 * Step 3.1 :- If step 3 is truthy, return please enter operator
 * Step 4:-If operator is anything other than +,-,*,/
 * step 4.1 If step 4 is truthy, return please enter correct operator
 * Step 5 :- Handle operation accordingly,
 * Step 6 :-If user entred +,*,-,/, operater
 * Step 6.1:- If truth,execute block according to the operater and return result
 *
 *  */
const calculator = (operand1, operand2, operator) => {
  var num1 = parseInt(operand1);
  var num2 = parseInt(operand2);
  if (num1 && num2) {
    if (
      operator === "+" ||
      operator === "-" ||
      operator === "*" ||
      operator === "/"
    ) {
      var result;
      if (operator == "+") {
        result = operand1 + operand2;
        return result;
      }
      if (operator == "-") {
        result = operand1 - operand2;
        return result;
      }
      if (operator == "*") {
        result = operand1 * operand2;
        return result;
      }
      if (operator == "/") {
        result = operand1 / operand2;
        return result;
      }
    }
    return "Please Enter correct value";
  }
  return "Please Enter correct value";
};
console.log(calculator("hh5", "5", "+"));
