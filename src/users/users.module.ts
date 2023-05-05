import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from "./entities/user.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import OrmConfig from "../database/orm-config";

@Module({
  imports: [
    TypeOrmModule.forRoot(OrmConfig),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
