import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserrDocument = Userr & Document;

@Schema()
export class Userr {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;
}

export const UserrSchema = SchemaFactory.createForClass(Userr);
