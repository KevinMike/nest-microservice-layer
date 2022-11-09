import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { WrongLoginException } from '../../../../exceptions/wrong-login-exception.exception';
import { LoggerService } from '../../../../shared/services/logger.service';
import { LoginResponse } from '../../dtos/login-response.dto';
import { BancoIndustrialService } from '../../services/bi-login.service';
import { LoginUserQuery } from '../impl/login-user.query';

@QueryHandler(LoginUserQuery)
export class LoginUserHandler implements IQueryHandler<LoginUserQuery> {
    constructor(
        private readonly _bancoIndustrial: BancoIndustrialService,
        private readonly _logger: LoggerService,
    ) {}

    async execute(query: LoginUserQuery): Promise<LoginResponse> {
        this._logger.log('[query] Async LoginUserQuery...');
        const loginResponse = await this._bancoIndustrial.login(query.user)
        if (loginResponse.status != 'success') {
            throw new WrongLoginException();
        }
        return loginResponse;
    }
}
