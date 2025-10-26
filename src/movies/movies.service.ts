import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Movie } from './schemas/movie.schema';
import { Actor } from '../actors/schema/actor.schema';

@Injectable()
export class MoviesService {
  constructor(
    @InjectModel(Movie.name) private movieModel: Model<Movie>,
    @InjectModel(Actor.name) private actorModel: Model<Actor>,
  ) {}

  findAll() {
    return this.movieModel.find().populate('actors').exec();
  }

  async create(title: string, genre: string, actorIds: string[]) {
    const movie = new this.movieModel({ title, genre, actors: actorIds });
    const savedMovie = await movie.save();

    // Update actors to reference this movie (bidirectional link)
    await this.actorModel.updateMany(
      { _id: { $in: actorIds } },
      { $addToSet: { movies: savedMovie._id } },
    );

    return savedMovie;
  }

  async addActor(movieId: string, actorId: string) {
    await this.movieModel.findByIdAndUpdate(
      movieId,
      { $addToSet: { actors: actorId } },
      { new: true },
    );
    await this.actorModel.findByIdAndUpdate(
      actorId,
      { $addToSet: { movies: movieId } },
      { new: true },
    );
    return this.movieModel.findById(movieId).populate('actors');
  }
}
