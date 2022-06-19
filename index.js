const TelegramBot = require('node-telegram-bot-api');


const token = '5449681342:AAGXAxO90zoyiG7i-PefcF67Mkrm49L8NMM';

const bot = new TelegramBot(token, {polling: true});

bot.on('message', function (msg) {
    console.log(msg);
    bot.sendMessage(msg.chat.id, `You tapped: ${msg.text}`);
})
