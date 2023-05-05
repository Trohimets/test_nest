import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "../../posts/entities/post.entity";


@Entity()
export class Group {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column('text')
  public title: string;

  @Column('text')
  public slug: string;

  @Column('text')
  public description: string;

  @OneToMany(() => Post, (Post) => Post.group)
  posts: Post[]

}
