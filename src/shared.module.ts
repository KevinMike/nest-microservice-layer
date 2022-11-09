import { Module, Global } from '@nestjs/common';

import { ConfigService } from './shared/services/config.service';
import { LoggerService } from './shared/services/logger.service';

const providers = [
    ConfigService,
    LoggerService
];

@Global()
@Module({
    providers,
    exports: [...providers],
})
export class SharedModule {}
