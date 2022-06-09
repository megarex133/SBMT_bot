const { Telegraf } = require("telegraf"); // import telegraf.js

const BOT_TOKEN = "5492224471:AAFDEz_n9TYJbYLis_llPgGNUfMscAaDZCc";

const bot = new Telegraf(BOT_TOKEN);

//Start command
bot.start((ctx) => {
  ctx.reply("Hi,bro!");
});

//Help command
bot.help((ctx) => {
  ctx.reply("How can i help you?");
});
// 'Расписание' text
bot.on("text", (ctx) => {
  /расписание/i.test(ctx.message.text)
    ? ctx.reply("Вот Ваше расписание.")
    : ctx.reply("Ошибка");
});
// Run the bot
bot.launch();
