import Big from 'big.js'

function operate (numberOne, numberTwo, operation) {
  const x = new Big(numberOne);
  const y = new Big(numberTwo);

  switch (operation) {
    case '+':
      return x.plus(y);
    case 'x':
      return x.times(y);
    case '-':
      return x.minus(y);
    case '/':
      return y != 0 ? x.div(y) : 'Undefined';
    case '%':
      return x.div(100);
    default:
      return 'Error!';
  }
};

export default operate