import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RoleDocument = Role & Document;
@Schema({ collection: 'roles' })
export class Role {
  @Prop({ required: true })
  name: string;

  @Prop({ Default: Date.now() })
  created_at: Date;

  @Prop()
  status: boolean;
}
export const RoleSchema = SchemaFactory.createForClass(Role);