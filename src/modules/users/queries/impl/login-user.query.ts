import { IQuery } from '@nestjs/cqrs';
import { UserBILoginDto } from '../../dtos/user-bi-login.dto';

export class LoginUserQuery implements IQuery {
    constructor(public readonly user: UserBILoginDto) {}
}
