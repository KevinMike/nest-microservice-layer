import {
    Controller,
    Post,
    Body,
    ValidationPipe,
    UsePipes,
} from '@nestjs/common';
import { UserBILoginDto } from '../dtos/user-bi-login.dto';
import { UserRegisterDto } from '../dtos/user-register.dto';
import { UsersService } from '../services/user.service';

@Controller()
export class UsersController {
    constructor(private readonly _usersService: UsersService) {}

    @Post()
    async createUser(@Body() userRegisterDto: UserRegisterDto) {
        return this._usersService.createUser(userRegisterDto);
    }

    @Post('login')
    @UsePipes(new ValidationPipe({ }))
    async updateUser(  @Body() userDto: UserBILoginDto) {
        return this._usersService.login(userDto);
    }

}
