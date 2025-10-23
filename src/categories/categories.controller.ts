import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  // Create category
  @Post()
  create(@Body() dto: CreateCategoryDto) {
    return this.categoriesService.create(dto);
  }

  // Get all categories
  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }

  // Add product to category
  @Post(':id/products')
  addProduct(@Param('id') id: string, @Body() dto: CreateProductDto) {
    return this.categoriesService.addProduct(id, dto);
  }

  // Remove product by name
  @Delete(':id/products/:name')
  removeProduct(@Param('id') id: string, @Param('name') name: string) {
    return this.categoriesService.removeProduct(id, name);
  }
}
