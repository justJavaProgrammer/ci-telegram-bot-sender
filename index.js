const TelegramBot = require('node-telegram-bot-api');
const core = require('@actions/core');
const github = require('@actions/github');

const token = '5449681342:AAGXAxO90zoyiG7i-PefcF67Mkrm49L8NMM';

const bot = new TelegramBot(token, {polling: true});
const repoName = core.getInput('repository-name');
bot.sendMessage('1218397122', `Repository: ${repoName}`);

