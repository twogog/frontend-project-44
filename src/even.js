import readlineSync from 'readline-sync';

const getname = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

console.log('Welcome to the Brain Games!');

const isEven = () => {
  const name = getname();
  console.log('Answer "yes" if the number even, otherwise answer "no".');
  for (let i = 0; i < 3;) {
    const random = Math.floor(Math.random() * 100);
    let isOk = '';
    if (random % 2 === 0) {
      isOk = 'yes';
    } else isOk = 'no';
    console.log(`Question: ${random}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === isOk) {
      console.log('Correct!');
      i += 1;
      if (i === 3) {
        return console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isOk}'.`);
      return console.log(`Let's try again, ${name}!`);
    }
  }
  return '';
};

export default isEven;
