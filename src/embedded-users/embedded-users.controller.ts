import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { EmbeddedUsersService } from './embedded-users.service';

@Controller('embedded-users')
export class EmbeddedUsersController {
  constructor(private readonly usersService: EmbeddedUsersService) {}

  @Post()
  create(@Body() body: any) {
    return this.usersService.create(body);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }
}
