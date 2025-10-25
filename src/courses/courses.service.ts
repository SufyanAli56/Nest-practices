import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course } from './schemas/course.schema';

@Injectable()
export class CoursesService {
  constructor(@InjectModel(Course.name) private courseModel: Model<Course>) {}

  async create(title: string) {
    return this.courseModel.create({ title });
  }

  async findAll() {
    return this.courseModel.find();
  }

  async findById(id: string) {
    const course = await this.courseModel.findById(id);
    if (!course) throw new NotFoundException('Course not found');
    return course;
  }

  async addStudentEmbed(courseId: string, student: any) {
    const course = await this.findById(courseId);

    const alreadyAdded = course.students.some(s => s.studentId === student.id);
    if (!alreadyAdded) {
      course.students.push({ studentId: student.id, name: student.name });
      await course.save();
    }
  }
}
