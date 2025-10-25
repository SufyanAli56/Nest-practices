import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

class EmbeddedStudent {
  @Prop()
  studentId: string;

  @Prop()
  name: string;
}

@Schema({ timestamps: true })
export class Course extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ type: [EmbeddedStudent], default: [] })
  students: EmbeddedStudent[];
}

export const CourseSchema = SchemaFactory.createForClass(Course);
