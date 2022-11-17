import {
    Column,
    Entity,
    PrimaryColumn,
} from 'typeorm';

@Entity()
export class Users {
    @PrimaryColumn({ generated: 'increment' })
    id: number;

    @Column('varchar', { length: 255, nullable: false, unique: true })
    username: string;

    @Column('varchar', { length: 255, nullable: false })
    password: string;

}
