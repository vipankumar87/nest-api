import { Injectable } from "@nestjs/common";
import {UserDocument, User} from "./user.entity";
import {Model, FilterQuery} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";
import {Role, RoleDocument} from "../../role/entities/role.entity";
const bcrypt = require('bcryptjs');

@Injectable()
export class UserRepository {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
        @InjectModel(Role.name) private roleModel: Model<RoleDocument>
    ) {}

    async findOne(filter: FilterQuery<User>):Promise<User>{
        return this.userModel.findOne(filter);
    }

    async find(filter: FilterQuery<User>):Promise<User[]>{
        return  this.userModel.find(filter);
    }
    findRoleByName(name: any):any{
        return this.roleModel.findOne({name: name}).exec();
    }
    async create(user: User ):Promise<User>{
        user.role = await this.findRoleByName(user.role);
        const newCat = new this.userModel(user);
        let salt = bcrypt.genSaltSync(parseInt(process.env.SALT_WORK_FACTOR));
        newCat.password = bcrypt.hashSync(newCat.password, salt);
        return newCat.save();
    }

    async update(filter: FilterQuery<User>, user: User):Promise<User>{
        return this.userModel.findOneAndUpdate(filter, user);
    }

    async delete(filter: FilterQuery<User>):Promise<User>{
        return this.userModel.findOneAndRemove(filter);
    }
}
