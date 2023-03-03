import { session, Telegraf } from "telegraf";
import { Command } from "./commands/command.class";
import { StartCommand } from "./commands/start.command";
import { IConfigService } from "./config/config.interface";
import { ConfigService } from "./config/config.service";
import { IBotContext } from "./context/context.interface";


`При нажатии на любую из кнопок, 
бот редактирует свое предыдущее сообщение и отвечает в соответствии
 с выбранным вариантом ответа. Также в каждом ответе есть ссылки на различные
  материалы для изучения TypeScript. Код использует интерфейс IBotContext, 
  который описывает контекст выполнения команды, и класс Command, который используется для 
  определения общей структуры команды и регистрации ее обработчика в Telegraf.`

class Bot {
    bot: Telegraf<IBotContext>;
    commands: Command[] = [];

    constructor(private readonly configService: IConfigService) {
        this.bot = new Telegraf<IBotContext>(this.configService.get("TOKEN"));
        this.bot.use(session());
    }
    init() {
        this.commands = [new StartCommand(this.bot)];
        for (const command of this.commands) {
            command.handle();
        }
        this.bot.launch();
    }
}

const bot = new Bot(new ConfigService());
bot.init();