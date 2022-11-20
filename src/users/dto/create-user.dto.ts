import { IsNotEmpty,Min } from "class-validator";

export class CreateUserDto {

    @IsNotEmpty()
    @Min(3)
    userName: string;

    @IsNotEmpty()
    @Min(8)
    password: string;

}
