import _ from 'lodash';
import commonLogic from './index.js';

const makeSimpleNumbers = (number) => {
  const arr = [];
  let result = 0;
  for (let i = 1; i <= number; i += 1) {
    result = number / i;
    result = String(result);
    if (!result.includes('.')) { arr.push(i); }
  }
  return arr;
};

const gameLogic = () => {
  let result = 1;
  const [a, b] = [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)];
  if (a === b) { result = a; }
  const firstAr = makeSimpleNumbers(a);
  const secondAr = makeSimpleNumbers(b);
  const intersect = _.intersection(firstAr, secondAr);
  result = _.max(intersect);
  console.log(`Question: ${a} ${b}`);
  return result;
};

export default () => {
  commonLogic('Find the greates common divisor of given numbers.', gameLogic);
};
