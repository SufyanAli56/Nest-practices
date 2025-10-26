import { Controller, Get, Post, Body } from '@nestjs/common';
import { ActorsService } from './actors.service';

@Controller('actors')
export class ActorsController {
  constructor(private readonly actorsService: ActorsService) {}

  @Get()
  findAll() {
    return this.actorsService.findAll();
  }

  @Post()
  create(@Body() body: { name: string; age: number; movieIds: string[] }) {
    return this.actorsService.create(body.name, body.age, body.movieIds);
  }
}
