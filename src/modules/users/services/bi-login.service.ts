import { Injectable } from '@nestjs/common';
import { UserBILoginDto } from '../dtos/user-bi-login.dto';
import { LoginResponse } from '../dtos/login-response.dto';

@Injectable()
export class BancoIndustrialService {
    constructor(
    ) {}

    public async login(user: UserBILoginDto) : Promise<LoginResponse> {
        return {
            status: 'success'
        }
    }
}
