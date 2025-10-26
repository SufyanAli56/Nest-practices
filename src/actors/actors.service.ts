import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Actor } from './schema/actor.schema';
import { Movie } from '../movies/schemas/movie.schema';

@Injectable()
export class ActorsService {
  constructor(
    @InjectModel(Actor.name) private actorModel: Model<Actor>,
    @InjectModel(Movie.name) private movieModel: Model<Movie>,
  ) {}

  findAll() {
    return this.actorModel.find().populate('movies').exec();
  }

  async create(name: string, age: number, movieIds: string[]) {
    const actor = new this.actorModel({ name, age, movies: movieIds });
    const savedActor = await actor.save();

    // Update movies to reference this actor
    await this.movieModel.updateMany(
      { _id: { $in: movieIds } },
      { $addToSet: { actors: savedActor._id } },
    );

    return savedActor;
  }
}
