import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// Embedded object to store course info inside student
class EmbeddedCourse {
  @Prop()
  courseId: string;

  @Prop()
  title: string;
}

@Schema({ timestamps: true })
export class Student extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ type: [EmbeddedCourse], default: [] })
  courses: EmbeddedCourse[];
}

export const StudentSchema = SchemaFactory.createForClass(Student);
