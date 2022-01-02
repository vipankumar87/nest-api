import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import {RoleRepository} from "./repository/role-repository";
import {FilterQuery} from "mongoose";

@Injectable()
export class RoleService {
  constructor(private readonly repo: RoleRepository) {
  }
  create(role: CreateRoleDto) {
    return this.repo.create(role);
  }

  findAll(f: FilterQuery<any>) {
    return this.repo.find(f);
  }

  findOne(id: number) {
    return this.repo.findOne({id: id});
  }

  update(id: number, role: UpdateRoleDto) {
    return this.repo.findAndUpdate({id: id}, role)
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
