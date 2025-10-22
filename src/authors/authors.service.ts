import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Author } from './schemas/author.schema';
import { Book } from '../books/schemas/book.schema';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectModel(Author.name) private authorModel: Model<Author>,
    @InjectModel(Book.name) private bookModel: Model<Book>,
  ) {}

  async createAuthor(name: string) {
    return this.authorModel.create({ name });
  }

  async addBook(authorId: string, title: string, genre: string) {
    const book = await this.bookModel.create({ title, genre, author: authorId });
    await this.authorModel.findByIdAndUpdate(authorId, {
      $push: { books: book._id },
    });
    return book;
  }

  async findAll() {
    return this.authorModel.find().populate('books').exec();
  }

  async findOne(id: string) {
    return this.authorModel.findById(id).populate('books').exec();
  }
}
