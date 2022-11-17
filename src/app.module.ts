import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config'
import { UsersModule } from './users/users.module';
import { AccountsModule } from './accounts/accounts.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), UsersModule, AccountsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
