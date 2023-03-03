import { Markup, Telegraf } from "telegraf";
import { IBotContext } from "../context/context.interface";
import { Command } from "./command.class";

export class StartCommand extends Command {
  constructor(bot: Telegraf<IBotContext>) {
    super(bot);
  }
  handle(): void {
    this.bot.start((ctx) => {
      if (!ctx.session) {
        ctx.session = {};
      }
      console.log(ctx.session);
      ctx.reply("Тебе нравится TypyScript с его типизацией???", Markup.inlineKeyboard([
        Markup.button.callback("👍", "ts_like"),
        Markup.button.callback("👎", "ts_dislike"),
      ])
      );
    });
    this.bot.action("ts_like", (ctx: any) => {
      if (!ctx.session) {
        ctx.session = {};
      }
      ctx.session.ts_like = true;
      ctx.editMessageText("Ого круто уважение 🐱‍💻 ✨ 🐱‍👤 🚬 🔥 \n Вот Инфа для изучения юзай сам тут учюсь");
      ctx.editMessageText("https://habr.com/ru/post/664960/");
      ctx.editMessageText("https://metanit.com/web/typescript/");
      ctx.editMessageText("https://proglib.io/p/samouchitel-dlya-nachinayushchih-kak-osvoit-typescript-s-nulya-za-30-minut-2021-03-12");
      ctx.editMessageText("Официальная документация TypeScript - https://www.typescriptlang.org/docs/");
      ctx.editMessageText("TypeScript Tutorial for Beginners - https://www.tutorialspoint.com/typescript/index.htm");
      ctx.editMessageText("TypeScript Video Tutorials on YouTube - https://www.youtube.com/results?search_query=typescript+tutorial");
      ctx.editMessageText("Мой Github https://github.com/424Nkita-Csharsfta4");
    });
    this.bot.action("ts_dislike", (ctx: any) => {
      if (!ctx.session) {
        ctx.session = {};
      }
      ctx.session.ts_dislike = false;
      ctx.editMessageText("Обидно много пропускаешь ну с ним есть свои траблы и не привычно он он топчик!!!");
    });

  }
}
