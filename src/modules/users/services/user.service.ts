import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';

import { CreateUserCommand } from '../commands/impl/create-user.command';
import { LoginResponse } from '../dtos/login-response.dto';
import { UserBILoginDto } from '../dtos/user-bi-login.dto';

import { UserRegisterDto } from '../dtos/user-register.dto';
import { LoginUserQuery } from '../queries/impl/login-user.query';

@Injectable()
export class UsersService {
    constructor(
        private readonly _commandBus: CommandBus,
        private readonly _queryBus: QueryBus,
    ) {}

    async createUser(user: UserRegisterDto) {
        return this._commandBus.execute(new CreateUserCommand(user));
    }

    async login(user: UserBILoginDto): Promise<LoginResponse> {
        return this._queryBus.execute(new LoginUserQuery(user))
    }

}
