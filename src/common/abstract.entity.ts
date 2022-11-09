import { AggregateRoot } from '@nestjs/cqrs';

export abstract class AbstractEntity extends AggregateRoot {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}
