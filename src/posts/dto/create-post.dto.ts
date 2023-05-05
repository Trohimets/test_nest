import { Entity } from "typeorm";
import { IsDate, IsEmail, IsString } from "class-validator";
import { User } from "../../users/entities/user.entity";
import { Group } from "../../groups/entities/group.entity";

@Entity()
export class CreatePostDto {
  @IsString()
  text: string;
  @IsString()
  author: User['firstName'];
  @IsEmail()
  group: Group['title'];
  @IsDate()
  pubDate: Date;
}
