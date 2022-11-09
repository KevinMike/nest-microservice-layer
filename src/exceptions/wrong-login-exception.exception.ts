import { BadRequestException } from '@nestjs/common';

export class WrongLoginException extends BadRequestException {
    constructor(error?: string) {
        super('User credentials are wrong', error);
    }
}
