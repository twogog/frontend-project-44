import commonLogic from '../src/index.js';

const gameLogic = () => {
  const random = Math.floor(Math.random() * 100);
  let result = '';
  if (random % 2 === 0) {
    result = 'yes';
  } else result = 'no';
  console.log(`Question: ${random}`);
  return result;
};

const isEven = () => {
  commonLogic('Answer "yes" if the number is even, otherwise answer "no".', gameLogic);
};

export default isEven;
