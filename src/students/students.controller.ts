import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  create(@Body('name') name: string) {
    return this.studentsService.create(name);
  }

  @Get()
  findAll() {
    return this.studentsService.findAll();
  }

  @Post(':studentId/enroll/:courseId')
  enroll(
    @Param('studentId') studentId: string,
    @Param('courseId') courseId: string,
  ) {
    return this.studentsService.enrollCourse(studentId, courseId);
  }
}
