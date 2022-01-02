import { Injectable } from "@nestjs/common";
import {RoleSchema, Role, RoleDocument } from "../entities/role.entity";
import {InjectModel} from "@nestjs/mongoose";
import {Model, FilterQuery } from "mongoose";
import {CreateRoleDto} from "../dto/create-role.dto";

@Injectable()
export class RoleRepository {
    constructor(@InjectModel(Role.name) private model:Model<RoleDocument>) { }
    async find(filter: FilterQuery<Role>):Promise<Role[]>{
        return this.model.find(filter);
    }
    async findOne(filter: FilterQuery<Role>):Promise<Role>{
        return this.model.findOne(filter);
    }
    async create(role: Role):Promise<Role>{
        const newCat = new this.model(role);
        return newCat.save();
    }
    async delete(filter: FilterQuery<Role>):Promise<Role>{
        return this.model.findOneAndRemove(filter);
    }
    async findAndUpdate(filter: FilterQuery<Role>, role: Role):Promise<any>{
        return this.model.updateMany(filter, role);
    }
}
