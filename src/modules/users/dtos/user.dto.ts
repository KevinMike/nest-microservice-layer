import {  IsNotEmpty, IsString } from 'class-validator';

export class UserDto {
    @IsString()
    readonly id!: string;

    @IsString()
    readonly firstName!: string;

    @IsString()
    readonly lastName!: string;

    @IsString()
    @IsNotEmpty()
    readonly phone: string;
}
