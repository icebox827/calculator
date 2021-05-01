import '@testing-library/jest-dom/extend-expect';
import calculate from '../logic/calculate';


const data = {
  total: '',
  next: '',
  operation: '',
};

const emptyData = () => {
  data.total = '';
  data.next = '';
  data.operation = '';
};

it('should add number', () => {
  expect(2 + 2).toBe(4);
});

it('should multiply number', () => {
  expect(2 * 2).toBe(4);
});

it('should substract number', () => {
  expect(6 - 2).toBe(4);
});

it('should divide number', () => {
  expect(8 / 2).toBe(4);
});

it('Should be 4', () => {
  const result = calculate(data, '4');
  expect(result.total).toEqual('4');
});

it('Should be + operator', () => {
  emptyData();
  let result = calculate(data, '1');
  result = calculate(result, '+');
  expect(result.operation).toEqual('+');
});

it('Should be - operator', () => {
  emptyData();
  let result = calculate(data, '1');
  result = calculate(result, '-');
  expect(result.operation).toEqual('-');
});

it('Should be / operator', () => {
  emptyData();
  let result = calculate(data, '1');
  result = calculate(result, '/');
  expect(result.operation).toEqual('/');
});

it('Should be x operator', () => {
  emptyData();
  let result = calculate(data, '1');
  result = calculate(result, 'x');
  expect(result.operation).toEqual('x');
});

it('Should be -4', () => {
  emptyData();
  let result = calculate(data, '4');
  result = calculate(result, '+/-');
  expect(result.total).toEqual(-4);
});
