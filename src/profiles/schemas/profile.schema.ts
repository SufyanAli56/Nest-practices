import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Employee } from '../../employees/schemas/employee.schema';

@Schema()
export class Profile extends Document {
  @Prop()
  bio: string;

  @Prop()
  address: string;


  @Prop({ type: Types.ObjectId, ref: 'Employee' })
  employee: Employee;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
