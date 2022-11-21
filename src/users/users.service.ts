import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private repository: Repository<Users>){};

  async create(createUserDto: Partial <CreateUserDto>) {
    const userName = await this.repository.findOne(
      { where:
          { userName: createUserDto.userName }
      });

    if(userName){
      throw new BadRequestException('UserName already exists');
    };

    const stringLength = createUserDto.userName

    if(stringLength.length < 3){
      throw new BadRequestException('Username must contain at least 3 characters');
    }

    const user = this.repository.create(createUserDto);
    const persistedUser = await this.repository.save(user);

    return persistedUser;
  }

  async findAll() {
    return this.repository.find();
  }

  async findOne(id: number) {
    const user = await this.repository.findOne(
      { where:
          { id: id }
      });

    if (user) {
        return user;
    }
    throw new NotFoundException(`user with id ${id} not found`);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    const user = await this.repository.findOne(
      { where:
          { id: id }
      });

    if (user) {
        return this.repository.remove(user);
    }
    throw new NotFoundException();

  }
}
