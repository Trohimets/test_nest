import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostDTO } from "./dto/post.dto";

@Controller('posts')
export class PostsController {
  constructor(private serv: PostsService) {
  }

  // @Post()
  // create(@Body() createPostDto: CreatePostDto) {
  //   return this.postsService.create(createPostDto);
  // }
  //
  // @Get()
  // findAll() {
  //   return this.postsService.findAll();
  // }
  @Get()
  public async getAll(): Promise<Post[]> {
    return await this.serv.getAll()
  }

  @Post()
  public async post(@User() user: Post, @Body() dto: PostDTO): Promise<PostDTO> {
    return this.serv.create(dto, user);
  }
}
//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.postsService.findOne(+id);
//
//   }
//
//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
//     return this.postsService.update(+id, updatePostDto);
//   }
//
//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.postsService.remove(id);
//   }
// }
