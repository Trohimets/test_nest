import { IsDate, IsString, IsUUID } from "class-validator";
import { Post } from "../entities/post.entity";
import { User } from "../../users/entities/user.entity";
import { Group } from "../../groups/entities/group.entity";


export class PostDTO implements Readonly<PostDTO> {
  id: string;
  @IsString()
  text: string;
  @IsDate()
  pubDate: Date;
  author: User['firstName'];
  group: Group['title'];

  public static from(dto: Partial<PostDTO>) {
    const it = new PostDTO();
    it.id = dto.id;
    it.text = dto.text;
    it.pubDate = dto.pubDate;
    it.author = dto.author;
    it.group = dto.group;
    return it;
  }

  public static fromEntity(entity: Post) {
    return this.from({
      id: entity.id,
      text: entity.text,
      pubDate: entity.pubDate,
      author: entity.author,
      group: entity.group
    });
  }

  public toEntity(user: User = null) {
    const it = new Post();
    // it.id = this.id;
    it.text = this.text;
    it.pubDate = new Date;
    it.author = this.author;
    it.group = this.group;
    return it;
  }
}