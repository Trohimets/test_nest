import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Post } from "./entities/post.entity";
import { PostDTO } from "./dto/post.dto";
import { User } from "../users/entities/user.entity";

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postsRepository: Repository<Post>) {
  }
  public async getAll(): Promise<PostDTO[]> {
    return await this.repo.find()
      .then(items => items.map(e => PostDTO.fromEntity(e)));
  }

  public async create(dto: PostDTO, user: User): Promise<PostDTO> {
    return this.repo.save(dto.toEntity(user))
      .then(e => PostDTO.fromEntity(e));
  }


}
