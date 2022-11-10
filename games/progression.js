import _ from 'lodash';
import commonLogic from '../src/index.js';

const gameLogic = () => {
  const [progrLength, progrStep] = [_.random(5, 10), _.random(1, 10), _.random(0, 100)];
  let progFirst = _.random(0, 100);
  const progDots = _.random(0, progrLength - 1);
  const progression = [];
  for (let i = 0; i < progrLength; i += 1) {
    progression.push(progFirst);
    progFirst += progrStep;
  }
  progression[progDots] = '..';
  console.log(`Question: ${progression.join(' ')}`);
  return progrStep;
};

export default () => {
  commonLogic('What number is missing in the progression.', gameLogic);
};
