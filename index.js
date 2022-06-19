const TelegramBot = require('node-telegram-bot-api');
const core = require('@actions/core');
const github = require('@actions/github');

const token = '5449681342:AAGXAxO90zoyiG7i-PefcF67Mkrm49L8NMM';

const bot = new TelegramBot(token, {polling: true});
const sender =  github.context.payload.sender;
const action = github.context.payload.action;
const repo = github.context.payload.repository;
bot.sendMessage('1218397122', `Hello, ${sender}, you are triggered event: ${action} in repository: ${repo.name}, url" ${repo.html_url}`).then(() => {
    console.log("Done")
    process.exit(0);
});

