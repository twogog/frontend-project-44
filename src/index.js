import readlineSync from 'readline-sync';

export default (purpose, gameLogic) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(purpose);

  for (let i = 0; i < 3; i += 1) {
    const result = String(gameLogic());
    const answer = readlineSync.question('Your answer: ');
    if (answer === result) {
      console.log('Correct!');
      if (i === 2) {
        return console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
      return console.log(`Let's try again, ${name}!`);
    }
  }
  return '';
};
