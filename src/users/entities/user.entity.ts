import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "../../posts/entities/post.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id: number;
  @Column('text')
  public firstName: string;
  @Column('text')
  public lastName: string;
  @Column('text')
  public email: string;

  @OneToMany(() => Post, (Post) => Post.author)
  posts: Post[]
}
