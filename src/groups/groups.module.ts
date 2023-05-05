import { Module } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { GroupsController } from './groups.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import OrmConfig from "../database/orm-config";
import { Group } from "./entities/group.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot(OrmConfig),
    TypeOrmModule.forFeature([Group]),
  ],
  controllers: [GroupsController],
  providers: [GroupsService],
  exports: [GroupsService]
})
export class GroupsModule {}
