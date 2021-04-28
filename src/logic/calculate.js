import operate from './operate'

function calculate(calcData, btnName) {
  let { total, next, operation } = calcData;

  if (btnName === 'AC') {
    total = null;
    next = null;
    operation = null;
    return calcData;
  }

  if (btnName === '+/-') {
    total = operate(total, next, operation) * -1;
    next = null;
    operation = null;
  }

  if (btnName === '%') {
    total /= 100;
    next /= 100;
    return calcData;
  }

  switch (btnName) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      if (!operation) {
        if (!total) {
          total = btnName;
        } else if (typeof total === 'number') {
          total = btnName;
        } else {
          total += btnName;
        }
      } else if (!next) {
        next = btnName;
      } else {
        next += btnName;
      }
      break;
    default: 
      return calcData;
  }

  if (['+', 'x', '-', '/'].includes(btnName)) {
    if (total && !next) {
      operation = btnName;
    }
    if (total && next && operation) {
      total = operate(total, next, operation)
      next = null;
      operation = btnName;
    }
    return calcData;
  }

  if (btnName === '.') {
    if (!total) {
      total = '0.';
    }
    if (total && !operation) {
      total += '.';
    }
    if (total && operation && next) {
      next += '.';
    }
    if (total && operation && !next) {
      next += '0.';
    }
    return calcData;
  }

  if (btnName === '=') {
    if (total && !next) {
      total = total;
    }
    if (total && next && operation) {
      total = operate(total, next, operation);
      next = null;
      operation = '=';
    }
    return calcData;
  }
  return calcData;
};

export default calculate;