import {
    Column,
    Entity,
    PrimaryColumn,
} from 'typeorm';

@Entity()
export class Accounts {
    @PrimaryColumn({ generated: 'increment' })
    id: number;

    @Column('real')
    balance: number;

}
