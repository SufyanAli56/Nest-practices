import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Address, AddressSchema } from './address.schema';

@Schema()
export class EmbeddedUser extends Document {
  @Prop()
  name: string;

  @Prop()
  email: string;

  // 🧩 Embedded document (no ref)
  @Prop({ type: AddressSchema })
  address: Address;
}

export const EmbeddedUserSchema = SchemaFactory.createForClass(EmbeddedUser);
