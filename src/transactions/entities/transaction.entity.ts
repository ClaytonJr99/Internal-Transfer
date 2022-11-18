import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryColumn,
    ManyToOne
} from 'typeorm';

import { Accounts } from 'src/accounts/entities/account.entity';

@Entity()
export class Transactions {
    @PrimaryColumn({ generated: 'increment' })
    id: number;

    @Column('real')
    value: number;

    @CreateDateColumn()
    readonly createdAt: Date;

    @ManyToOne(() => Accounts, (accounts) => accounts.id)
    debitedAccount: Accounts;

    @ManyToOne(() => Accounts, (accounts) => accounts.id)
    creditedAccount: Accounts;

}
