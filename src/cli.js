import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const getname = () => {
  const name = readlineSync.question('May I have your name? ');
  return console.log(`Hello, ${name}!`);
};

export default getname;
