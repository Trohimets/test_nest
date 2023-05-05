import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Group } from "./entities/group.entity";
import { Post } from "../posts/entities/post.entity";

@Injectable()
export class GroupsService {
  constructor(
    @InjectRepository(Group)
    private readonly groupsRepository: Repository<Group>) {}

  create(dto: CreateGroupDto) {
    const group = new Group();
    group.title = dto.title;
    group.description = dto.description;
    group.slug = dto.slug;
    return this.groupsRepository.save(group);
  }

  findAll(): Promise<Group[]> {
    return this.groupsRepository.find();
  }

  async findOne(id: number): Promise<Group> {
    let group = await this.groupsRepository.findOne({
      where: { id },
      relations: ['post']
    })
    return group;
  }

  update(id: number, updateGroupDto: UpdateGroupDto) {
    return `This action updates a #${id} group`;
  }

  async remove(id: string): Promise<void> {
    await this.groupsRepository.delete(id);
  }
}
