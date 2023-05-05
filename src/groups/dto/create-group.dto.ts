import { Entity } from "typeorm";
import { IsString } from "class-validator";

@Entity()
export class CreateGroupDto {
  @IsString()
  title: string;
  @IsString()
  description: string;
  @IsString()
  slug: string
}
