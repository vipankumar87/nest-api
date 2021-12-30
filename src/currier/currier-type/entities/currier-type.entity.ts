import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CurrierTypeDocument = CurrierType & Document;
@Schema({ collection: 'currier_types' })
export class CurrierType {
  @Prop({ required: true })
  name: string;

  @Prop({ default: Date.now() })
  created_at: Date;

  @Prop()
  status: boolean;
}
export const CurrierTypeSchema = SchemaFactory.createForClass(CurrierType);
