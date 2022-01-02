import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {Document, ObjectId, SchemaType} from 'mongoose';
import {Role} from "../../role/entities/role.entity";
import mongoose from "mongoose";
const bcrypt = require('bcryptjs');

let SALT_WORK_FACTOR = 10;
interface IUser extends Document{
  email: string;
  password: string;
  name: string;
}
export type UserDocument = User & Document;
@Schema({ collection: 'users' })
export class User {
  @Prop({ required: true, unique: true })
  username: string;

  @Prop({required: true})
  password: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop()
  verified_at: Date;

  @Prop({ required: true, default: false })
  status: boolean;

  @Prop({ required: true })
  first_name: string;

  @Prop({ required: true })
  last_name: string;

  @Prop({required: true, type: Role })
  role: {type: mongoose.Schema.Types.ObjectId, ref: Role }
}
export const UserSchema = SchemaFactory.createForClass(User);
