import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {UserRepository} from "./entities/user.repository";

@Injectable()
export class UserService {
  constructor(private readonly repo: UserRepository) {
  }
  create(createUserDto: CreateUserDto) {
    return this.repo.create(createUserDto);
  }

  findAll() {
    return this.repo.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
