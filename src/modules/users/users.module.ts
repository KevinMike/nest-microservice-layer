import { Module } from '@nestjs/common';
import { CommandHandlers } from './commands/handlers';
import { UsersController } from './controllers/user.controller';
import { QueryHandlers } from './queries/handlers';
import { BancoIndustrialService } from './services/bi-login.service';
import { UsersService } from './services/user.service';
import { CqrsModule } from '@nestjs/cqrs'

@Module({
    imports: [
        CqrsModule
    ],
    controllers: [UsersController],
    providers: [
        UsersService,
        BancoIndustrialService,
        ...QueryHandlers,
        ...CommandHandlers
    ],
})
export class UsersModule {}
