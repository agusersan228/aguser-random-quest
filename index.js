const readlineSync = require('readline-sync');

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Madrid'],
    answer: 'Paris'
  },
  {
    question: 'Who wrote "Hamlet"?',
    options: ['William Shakespeare', 'Charles Dickens', 'Leo Tolstoy', 'Mark Twain'],
    answer: 'William Shakespeare'
  },
  {
    question: 'What is the chemical symbol for gold?',
    options: ['Au', 'Ag', 'Pb', 'Fe'],
    answer: 'Au'
  }
];

let score = 0;

questions.forEach((q, index) => {
  console.log(`Question ${index + 1}: ${q.question}`);
  const answerIndex = readlineSync.keyInSelect(q.options, 'Choose the correct answer:');
  if (q.options[answerIndex] === q.answer) {
    console.log('Correct!');
    score++;
  } else {
    console.log('Wrong!');
  }
  console.log(`Current score: ${score}\n`);
});

console.log(`Game over! Your final score is: ${score} out of ${questions.length}`);
