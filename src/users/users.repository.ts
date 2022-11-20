import { Injectable } from '@nestjs/common';
import { Repository, EntityRepository } from 'typeorm';
import { Users } from './entities/user.entity'; 

@Injectable()
@EntityRepository(Users)
export class UsersRepository extends Repository<Users> {}
