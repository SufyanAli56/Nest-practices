import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Employee } from './schemas/employee.schema';
import { Profile } from '../profiles/schemas/profile.schema';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectModel(Employee.name) private employeeModel: Model<Employee>,
    @InjectModel(Profile.name) private profileModel: Model<Profile>,
  ) {}

  // Create Employee + Profile (One-to-One link)
  async createEmployeeWithProfile(data: { name: string; email: string; bio: string; address: string }) {
    // Step 1: Create profile
    const profile = new this.profileModel({
      bio: data.bio,
      address: data.address,
    });
    await profile.save();

    // Step 2: Create employee linked to that profile
    const employee = new this.employeeModel({
      name: data.name,
      email: data.email,
      profile: profile._id,
    });
    await employee.save();

    // Step 3: Update profile with employee reference
    (profile as any).employee = employee._id;
    await profile.save();

    // Step 4: Return fully populated result
    return this.employeeModel.findById(employee._id).populate('profile').exec();
  }

  async findAll() {
    return this.employeeModel.find().populate('profile').exec();
  }

  async findOne(id: string) {
    return this.employeeModel.findById(id).populate('profile').exec();
  }
}
