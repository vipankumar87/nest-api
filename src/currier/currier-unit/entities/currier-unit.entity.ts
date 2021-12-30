import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CurrierUnitDocument = CurrierUnit & Document;
@Schema({ collection: 'currier_units' })
export class CurrierUnit {
  @Prop({ required: true })
  name: string;

  @Prop({ default: Date.now() })
  created_at: Date;

  @Prop()
  status: boolean;
}
export const CurrierUnitSchema = SchemaFactory.createForClass(CurrierUnit);
