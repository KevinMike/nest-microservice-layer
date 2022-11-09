import { AbstractEntity } from '../../../common/abstract.entity';

export class User extends AbstractEntity {
    firstName: string;
    lastName: string;
    phone: string;
}
