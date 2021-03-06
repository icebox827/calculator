import operate from './operate'

function calculate(calcData, btnName) {
  let { total, next, operation } = calcData;

  if (btnName === 'AC') {
    total = null;
    next = null;
    operation = null;
  }

  if (btnName === '+/-') {
    total *= -1;
    next *= -1 ;
    operation = null;
  }

  if (btnName === '%') {
    total /= 100;
    next /= 100;
  }

  if (['0','1','2','3','4','5','6','7','8','9'].includes(btnName)) {
    if (!operation) {
      if (!total) {
        total = btnName;
      } else {
        total += btnName;
      }
    } else if (!next) {
      next = btnName;
    } else {
      next += btnName;
    }
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
  }
  return { total, next, operation };
};

export default calculate;