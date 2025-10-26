import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Actor } from '../../actors/schema/actor.schema';

@Schema({ timestamps: true })
export class Movie extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  genre: string;

  // Many-to-Many referencing (ObjectIds of actors)
  @Prop({ type: [{ type: Types.ObjectId, ref: 'Actor' }] })
  actors: Actor[];
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
