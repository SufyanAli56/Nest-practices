import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student } from './schema/student.schema';
import { CoursesService } from '../courses/courses.service';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<Student>,
    private coursesService: CoursesService,
  ) {}

  async create(name: string) {
    return this.studentModel.create({ name });
  }

  async findAll() {
    return this.studentModel.find();
  }

  async findById(id: string) {
    const student = await this.studentModel.findById(id);
    if (!student) throw new NotFoundException('Student not found');
    return student;
  }

  async enrollCourse(studentId: string, courseId: string) {
    const student = await this.findById(studentId);
    const course = await this.coursesService.findById(courseId);

    // Avoid duplicate enrollment
    const alreadyEnrolled = student.courses.some(c => c.courseId === course.id);
    if (alreadyEnrolled) return { message: 'Already enrolled' };

    // Add course info inside student (embedded)
    student.courses.push({ courseId: course.id, title: course.title });
    await student.save();

    // Add student info inside course (embedded)
    await this.coursesService.addStudentEmbed(course.id, student);

    return { message: `${student.name} enrolled in ${course.title}` };
  }
}
