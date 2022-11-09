import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { SharedModule } from './shared.module';
import { ConfigService } from './shared/services/config.service';
import { LoggerService } from './shared/services/logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const loggerService = app.select(SharedModule).get(LoggerService);
  const configService = app.select(SharedModule).get(ConfigService);

  app.useLogger(loggerService);
  app.useGlobalFilters(new HttpExceptionFilter(loggerService));

  const port = configService.getNumber('PORT') || 3000;

  await app.listen(port);
}
bootstrap();
