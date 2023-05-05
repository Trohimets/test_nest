import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import OrmConfig from "../database/orm-config";
import { Post } from "./entities/post.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot(OrmConfig),
    TypeOrmModule.forFeature([Post]),
  ],
  controllers: [PostsController],
  providers: [PostsService],
  exports: [PostsService]
})
export class PostsModule {}
