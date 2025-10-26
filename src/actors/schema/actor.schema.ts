import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Movie } from 'src/movies/schemas/movie.schema';

@Schema({ timestamps: true })
export class Actor extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  age: number;

  // Many-to-Many referencing (ObjectIds of movies)
  @Prop({ type: [{ type: Types.ObjectId, ref: 'Movie' }] })
  movies: Movie[];
}

export const ActorSchema = SchemaFactory.createForClass(Actor);
