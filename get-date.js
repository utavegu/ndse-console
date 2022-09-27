#!/usr/bin/env node

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const getYear = require('date-fns/getYear');
const getMonth = require('date-fns/getMonth');
const getDate = require('date-fns/getDate');
const addYears = require('date-fns/addYears');
const addMonths = require('date-fns/addMonths');
const addDays = require('date-fns/addDays');
const subYears = require('date-fns/subYears');
const subMonths = require('date-fns/subMonths');
const subDays = require('date-fns/subDays');

const parameters = yargs(hideBin(process.argv))
  .option('current', {
    type: "string",
    description: "Получение текущей даты",
  })
  .option('add', {
    type: "string",
    description: "Прибавить к текущей дате",
  })
  .option('sub', {
    type: "string",
    description: "Вычесть из текущей даты",
  })
  .option('year', {
    alias: "y",
    type: "number",
    description: "Год",
  })
  .option('month', {
    alias: "m",
    type: "number",
    description: "Месяц",
  })
  .option('date', {
    alias: "d",
    type: "number",
    description: "День месяца",
  })
  .argv

if (parameters._.find(param => param === 'current')) {
  if (Object.keys(parameters).length < 3) {
    console.log('Дата и время в формате ISO: ', new Date().toISOString());
  } else {
    if (parameters.hasOwnProperty('year')) {
      console.log(`Сейчас ${getYear(new Date())} год`);
    } else if (parameters.hasOwnProperty('month')) {
      console.log(`Сейчас ${getMonth(new Date()) + 1} месяц`);
    } else if (parameters.hasOwnProperty('date')) {
      console.log(`Сейчас ${getDate(new Date())} день месяца`);
    } else {
      console.log('Неверный флаг!');
    }
  }
}

if (parameters._.find(param => param === 'add')) {
  if (parameters.year) {
    console.log ('Год после суммирования: ', getYear((addYears(new Date(), parameters.year))));
  }
  if (parameters.month) {
    console.log ('Месяц после суммирования: ', getMonth((addMonths(new Date(), parameters.month))) + 1)
  }
  if (parameters.date) {
    console.log ('День месяца после суммирования: ', getDate((addDays(new Date(), parameters.date))))
  }
}

if (parameters._.find(param => param === 'sub')) {
  if (parameters.year) {
    console.log ('Год после вычитания: ', getYear((subYears(new Date(), parameters.year))));
  }
  if (parameters.month) {
    console.log ('Месяц после вычитания: ', getMonth((subMonths(new Date(), parameters.month))) + 1);
  }
  if (parameters.date) {
    console.log ('День месяца после вычитания: ', getDate((subDays(new Date(), parameters.date))));
  }
}
