import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
import { Users } from 'src/users/entities/user.entity';
import { Accounts } from 'src/accounts/entities/account.entity';
import { Transactions } from 'src/transactions/entities/transaction.entity';


export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'pguser',
  password: 'pgpassword',
  database: 'pgdatabase',
  entities: [Users, Accounts, Transactions],
  synchronize: true,
};