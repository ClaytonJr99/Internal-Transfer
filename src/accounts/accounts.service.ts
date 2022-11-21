import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Accounts } from './entities/account.entity';

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(Accounts)
    private repository: Repository<Accounts>){};

  async create(createAccountDto: Partial <CreateAccountDto>) {

    const account = this.repository.create(createAccountDto);
    const persistedAccount = await this.repository.save(account);

    return persistedAccount;
  }

  async findAll() {
    return this.repository.find();
  }

  async findOne(id: number) {
    const account = await this.repository.findOne(
      { where:
          { id: id }
      });

    if (account) {
        return account;
    }
    throw new NotFoundException(`user with id ${id} not found`);
  }

  update(id: number, updateAccountDto: UpdateAccountDto) {
    return `This action updates a #${id} account`;
  }

  async remove(id: number) {
    const account = await this.repository.findOne(
      { where:
          { id: id }
      });

    if (account) {
        return this.repository.remove(account);
    }
    throw new NotFoundException();

  }
}
