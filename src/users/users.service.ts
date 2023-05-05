import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from "./entities/user.entity";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>) {
  }

  create(dto: CreateUserDto) {
    const user = new User();
    user.firstName = dto.firstName;
    user.lastName = dto.lastName;
    user.email = dto.email;
    return this.usersRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOne({
      where: { id }
    });
  }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.preload({
      id: id,
      ...updateUserDto,
    });
    if (!user) {
      throw new NotFoundException(`User with ID=${id} not found`);
    }
    return this.usersRepository.save(user);
  }

 //  async update(dto: { id: string }, data: any): Promise<User> {
 //      console.log(dto);
 //      const user =await this.usersRepository.preload(dto.id, ...updateUserDto,);
 //      return this.usersRepository.save(user);
 // }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

}
