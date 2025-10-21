import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EmbeddedUser } from './schemas/embedded-user.schema';

@Injectable()
export class EmbeddedUsersService {
  constructor(
    @InjectModel(EmbeddedUser.name) private userModel: Model<EmbeddedUser>,
  ) {}

  async create(data: any) {
    const user = new this.userModel(data);
    return user.save();
  }

  async findAll() {
    return this.userModel.find().exec();
  }

  async findOne(id: string) {
    return this.userModel.findById(id).exec();
  }
}
