const { Telegraf } = require("telegraf"); // import telegraf.js

const BOT_TOKEN = "5492224471:AAFDEz_n9TYJbYLis_llPgGNUfMscAaDZCc";

const bot = new Telegraf(BOT_TOKEN);

//Start command
bot.start((ctx) => {
  ctx.reply(
    `Приветствую, ${ctx.from.first_name}\nЯ бот Института Бизнеса, который поможет сделать твою студенческую жизнь чуть проще:)`
  );
  ctx.reply(
    "Вот список команд, которые я выполняю:\n /timetable - Показать расписание занятий"
  );
});

//Help command
bot.help((ctx) => {
  ctx.reply(
    "Вот список команд, которые я выполняю:\n /timetable - Показать расписание занятий"
  );
});
// 'Расписание' text
// bot.on("message", (ctx) => {
//   /расписание/i.test(ctx.message)
//     ? ctx.reply("Вот Ваше расписание.")
//     : ctx.reply("Ошибка");
// });
// Command timetable
bot.command("timetable", (ctx) => {
  ctx.reply("Введи номер учебной группы");
  // let success = false;
  bot.hears(/[0-9]{3,4}/, (ctx) => {
    ctx.reply("Расписание для твоей группы");
    // return (success = true);
  });
  // console.log(success);
  // success ? ctx.reply("Чем ещё помочь?") : ctx.reply("Такой группы нет");
});
// Run the bot
bot.launch();
