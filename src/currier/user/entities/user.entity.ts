import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;
@Schema({ collection: 'users' })
export class User {
  @Prop({ required: true, unique: true })
  username: string;

  @Prop()
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
}
export const UserSchema = SchemaFactory.createForClass(User);
