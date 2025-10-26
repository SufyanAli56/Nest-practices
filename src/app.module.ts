import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { EmployeesModule } from './employees/employees.module';
import { ProfilesModule } from './profiles/profiles.module';
import { EmbeddedUsersModule } from './embedded-users/embedded-users.module';
import { AuthorsModule } from './authors/authors.module';
import { BooksModule } from './books/books.module';
import { CategoriesModule } from './categories/categories.module';
import { StudentsModule } from './students/students.module';
import { CoursesModule } from './courses/courses.module';
import { MoviesModule } from './movies/movies.module';
import { ActorsModule } from './actors/actors.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/db-nest-api'),
    UsersModule,
    EmployeesModule,
    ProfilesModule,
    EmbeddedUsersModule,
    AuthorsModule,
    BooksModule,
    CategoriesModule,
    StudentsModule,
    CoursesModule,
    MoviesModule,
    ActorsModule,
  ],
})
export class AppModule {}
