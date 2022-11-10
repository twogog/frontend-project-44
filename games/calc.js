import commonLogic from '../src/index.js';

const operRandom = () => {
  const result = Math.floor(Math.random() * 10);
  if (result < 4) {
    return '+';
  } if (result > 7) {
    return '*';
  }
  return '-';
};

const gameLogic = () => {
  let result = 0;
  const [a, operand, b] = [Math.floor(Math.random() * 100),
    operRandom(), Math.floor(Math.random() * 100)];
  switch (operand) {
    case '+': result = a + b; break;
    case '-': result = a - b; break;
    case '*': result = a * b; break;
    default: break;
  }
  console.log(`Question: ${a} ${operand} ${b}`);
  return result;
};

const makeCalc = () => {
  commonLogic('What is the result of the expression?', gameLogic);
};

export default makeCalc;
