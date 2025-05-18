function calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      return (result = num1 + num2);
    case "-":
      return (result = num1 - num2);
    case "*":
      return (result = num1 * num2);
    case "/":
      return (result = num1 / num2);
    default:
      throw new Error("Invalid operator. Use +, -, *, or /.");
  }
}

module.exports = calculator;
