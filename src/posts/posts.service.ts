import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Post } from "./entities/post.entity";

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postsRepository: Repository<Post>) {
  }

  create(dto: CreatePostDto) {
    const post = new Post();
    post.text = dto.text;
    post.author = dto.author['firstName'];
    post.group = dto.group['title'];
    post.pubDate = dto.pubDate;
    return this.postsRepository.save(post);
  }

  findAll(): Promise<Post[]> {
    return this.postsRepository.find(
      {relations: ['author', 'group']});
  }

  async findOne(id: number): Promise<Post> {
    return this.postsRepository.findOne({
      where: { id },
      relations: ['author', 'group']
    })
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  async remove(id: string): Promise<void> {
    await this.postsRepository.delete(id);
  }
}
