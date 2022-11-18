import {
    Column,
    Entity,
    PrimaryColumn,
    OneToOne,
    JoinColumn
} from 'typeorm';

import { Accounts } from 'src/accounts/entities/account.entity';

@Entity()
export class Users {
    @PrimaryColumn({ generated: 'increment' })
    id: number;

    @Column('varchar', { length: 255, nullable: false, unique: true })
    username: string;

    @Column('varchar', { length: 255, nullable: false })
    password: string;

    @OneToOne(() => Accounts)
    @JoinColumn()
    account: Accounts;

}
