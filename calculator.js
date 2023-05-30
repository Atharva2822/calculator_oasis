function addNumber(number) {
  var display = document.getElementById("display");
  display.value += number;
}

function addOperator(operator) {
  var display = document.getElementById("display");
  display.value += operator;
}

function equal() {
  var display = document.getElementById("display");
  var expression = display.value;
  var result = eval(expression);
  display.value = result;
}
