const calculator = (operand1, operand2, operator) => {
    if (parseInt(operand1 !== true && operand2 !== true)) {
      return "please enter correct value";
    }
    if (["+", "-", "/", "*"].includes(operator)) {
      return eval(`${operand1} ${operator} ${operand2}`);
    }
    return "Operator is not available";
  };
  console.log(calculator(6, 5, "-"));