import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, Min } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {

    @Min(3)
    userName: string;

    @Min(8)
    password: string;
    
}
