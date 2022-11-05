import readlineSync from 'readline-sync';

const getname = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const operRandom = () => {
  const result = Math.floor(Math.random() * 10);
  if (result < 4) {
    return '+';
  } if (result > 7) {
    return '*';
  }
  return '-';
};

console.log('Welcome to the Brain Games!');

const makeCalc = () => {
  const name = getname();
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3;) {
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
    const answer = readlineSync.question('Your answer: ');
    if (+answer === result) {
      console.log('Correct!');
      i += 1;
      if (i === 3) {
        return console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
      return console.log(`Let's try again, ${name}!`);
    }
  }
  return '';
};

export default makeCalc;
