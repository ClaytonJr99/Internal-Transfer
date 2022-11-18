import {
    Column,
    Entity,
    PrimaryColumn,
    OneToMany
} from 'typeorm';

import { Transactions } from 'src/transactions/entities/transaction.entity';

@Entity()
export class Accounts {
    @PrimaryColumn({ generated: 'increment' })
    id: number;

    @Column('real')
    balance: number;

    @OneToMany(() => Transactions, (transactions) => transactions.debitedAccount)
    transactions: Transactions[];
}
