import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryColumn,
} from 'typeorm';

@Entity()
export class Transactions {
    @PrimaryColumn({ generated: 'increment' })
    id: number;

    @Column('real')
    value: number;

    @CreateDateColumn()
    readonly createdAt: Date;

}
