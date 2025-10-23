import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from './schemas/category.schema';
import { CreateCategoryDto } from './dto/create-category.dto';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>,
  ) {}

  // Create a new category
  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const category = new this.categoryModel(createCategoryDto);
    return category.save();
  }

  // Get all categories (with embedded products)
  async findAll(): Promise<Category[]> {
    return this.categoryModel.find().exec();
  }

  // Add an embedded product to a category
  async addProduct(categoryId: string, productDto: CreateProductDto): Promise<Category> {
    const category = await this.categoryModel.findById(categoryId);
    if (!category) {
      throw new NotFoundException('Category not found');
    }

    category.products.push(productDto);
    await category.save();

    return category;
  }

  // Remove an embedded product by name
  async removeProduct(categoryId: string, productName: string): Promise<Category> {
    const category = await this.categoryModel.findById(categoryId);
    if (!category) {
      throw new NotFoundException('Category not found');
    }

    category.products = category.products.filter(
      (p) => p.name !== productName,
    );

    await category.save();
    return category;
  }
}
