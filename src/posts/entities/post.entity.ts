import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../users/entities/user.entity";
import { Group } from "../../groups/entities/group.entity";
import { Transform } from 'class-transformer';
@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column('text')
  public text: string;

  // @Column('text')
  // public author: User;

  // @Column('text')
  // public group_id: Group;

  @CreateDateColumn()
  public pubDate: Date;

  @ManyToOne(() => User, (author) => author.posts)
  @JoinColumn({ name: 'author' })
  public author: User

  @ManyToOne(() => Group, (group) => group.id)
  @JoinColumn({ name: 'group' })
  public group: Group

}
