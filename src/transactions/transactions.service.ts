import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { Transactions } from './entities/transaction.entity';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transactions)
    private repository: Repository<Transactions>){};

  async create(createTransactionDto: Partial <CreateTransactionDto>) {

    const transaction = this.repository.create(createTransactionDto);
    const persistedTransaction = await this.repository.save(transaction);

    return persistedTransaction;
  }

  async findAll() {
    return this.repository.find();
  }

  async findOne(id: number) {
    const transaction = await this.repository.findOne(
      { where:
          { id: id }
      });

    if (transaction) {
        return transaction;
    }
    throw new NotFoundException(`transaction with id ${id} not found`);
  }

  update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return `This action updates a #${id} transaction`;
  }

  async remove(id: number) {
    const transaction = await this.repository.findOne(
      { where:
          { id: id }
      });

    if (transaction) {
        return this.repository.remove(transaction);
    }
    throw new NotFoundException();

  }
}
