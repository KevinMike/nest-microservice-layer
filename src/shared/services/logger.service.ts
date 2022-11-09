import { Injectable, ConsoleLogger } from '@nestjs/common';

import { ConfigService } from './config.service';

@Injectable()
export class LoggerService extends ConsoleLogger {
    private readonly _logger: any;

    constructor(private readonly _configService: ConfigService) {
        super(LoggerService.name);
        this._logger = console;
        if (_configService.nodeEnv !== 'production') {
            this._logger.debug('Logging initialized at debug level');
        }
    }
    log(message: string): void {
        this._logger.info(message);
    }
    info(message: string): void {
        this._logger.info(message);
    }
    debug(message: string): void {
        this._logger.debug(message);
    }
    error(message: string, trace?: any, context?: string): void {
        this._logger.error(
            `${context || ''} ${message} -> (${trace ||
                'trace not provided !'})`,
        );
    }
    warn(message: string): void {
        this._logger.warn(message);
    }
}
