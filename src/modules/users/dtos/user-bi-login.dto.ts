import { IsString, IsNotEmpty } from 'class-validator';

export class UserBILoginDto {
    @IsString()
    @IsNotEmpty()
    readonly BICode!: string;

    @IsString()
    @IsNotEmpty()
    readonly BIUser!: string;

    @IsString()
    @IsNotEmpty()
    readonly BIPassword!: string;
}
