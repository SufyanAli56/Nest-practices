import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AuthorsService } from './authors.service';

@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @Post()
  create(@Body('name') name: string) {
    return this.authorsService.createAuthor(name);
  }

  @Post(':id/books')
  addBook(
    @Param('id') authorId: string,
    @Body('title') title: string,
    @Body('genre') genre: string,
  ) {
    return this.authorsService.addBook(authorId, title, genre);
  }

  @Get()
  findAll() {
    return this.authorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authorsService.findOne(id);
  }
}
