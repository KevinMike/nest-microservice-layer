import { Logger } from '@nestjs/common';
import { ICommandHandler, CommandHandler } from '@nestjs/cqrs';

import { CreateUserCommand } from '../impl/create-user.command';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
    constructor(
    ) {}

    async execute(command: CreateUserCommand) {
        Logger.log('Async CreateUserHandler...', 'CreateUserCommand');
    }
}
