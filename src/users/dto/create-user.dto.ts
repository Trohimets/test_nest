import { Entity } from "typeorm";
import { IsEmail, IsString } from "class-validator";

@Entity()
export class CreateUserDto {
  @IsString()
  firstName: string;
  @IsString()
  lastName: string;
  @IsEmail()
  email: string;
}
