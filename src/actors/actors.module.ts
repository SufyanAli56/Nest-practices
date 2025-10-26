import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Actor, ActorSchema } from './schema/actor.schema';
import { ActorsService } from './actors.service';
import { ActorsController } from './actors.controller';
import { Movie, MovieSchema } from '../movies/schemas/movie.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Actor.name, schema: ActorSchema },
      { name: Movie.name, schema: MovieSchema },
    ]),
  ],
  controllers: [ActorsController],
  providers: [ActorsService],
})
export class ActorsModule {}
