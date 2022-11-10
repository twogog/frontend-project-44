import _ from 'lodash';
import commonLogic from '../src/index.js';

const gameLogic = () => {
  const number = _.random(0, 1000);
  console.log(`Question: ${number}`);
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

export default () => {
  commonLogic('Answer "yes" if given number is prime, otherwise answer "no".', gameLogic);
};
