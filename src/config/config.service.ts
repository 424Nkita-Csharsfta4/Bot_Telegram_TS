import { config, DotenvConfigOutput } from "dotenv";
import { IConfigService } from "./config.interface";


export class ConfigService implements IConfigService {
    private config: {[key: string]: string};

    constructor() {
        const { error, parsed } = config();

        if (error) {
            throw new Error('Не найден файл .env');
        }

        if (!parsed) {
            throw new Error('Пустой файл');
        }

        this.config = parsed;
    }

    get(key: string): string {
        const res = this.config[key];

        if (!res) {
            throw new Error("Нет такого ключа");
        }

        return res;
    }
}
