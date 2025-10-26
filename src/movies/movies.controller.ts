import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  findAll() {
    return this.moviesService.findAll();
  }

  @Post()
  create(@Body() body: { title: string; genre: string; actorIds: string[] }) {
    return this.moviesService.create(body.title, body.genre, body.actorIds);
  }

  @Post(':movieId/actors/:actorId')
  addActor(
    @Param('movieId') movieId: string,
    @Param('actorId') actorId: string,
  ) {
    return this.moviesService.addActor(movieId, actorId);
  }
}
