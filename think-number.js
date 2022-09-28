#!/usr/bin/env node

const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

const thinkingNumber = Math.floor(Math.random() * 100);

console.log('Загадано число в диапазоне от 0 до 100');

rl.on('line', (answer) => {
  if (Number(answer) < thinkingNumber) {
    rl.setPrompt('Больше \n');
    rl.prompt();
  } else if (Number(answer) > thinkingNumber) {
    rl.setPrompt('Меньше \n');
    rl.prompt();
  } else if (Number(answer) === thinkingNumber) {
    console.log(`Отгадано число ${thinkingNumber}`);
    rl.close();
  }
})

rl.on('close', () => {
  console.log('Игра завершена');
})
