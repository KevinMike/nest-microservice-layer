import * as dotenv from 'dotenv';

export class ConfigService {
    constructor() {
        dotenv.config({
            path: `.env`,
        });
    }

    public get(key: string): string | undefined {
        return process.env[key]?.toString();
    }

    public getNumber(key: string): number {
        return Number(this.get(key));
    }

    get nodeEnv(): string {
        return this.get('NODE_ENV') || 'development';
    }

}
