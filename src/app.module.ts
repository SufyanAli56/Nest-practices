import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { EmployeesModule } from './employees/employees.module';
import { ProfilesModule } from './profiles/profiles.module';
import { EmbeddedUsersModule } from './embedded-users/embedded-users.module';
import { AuthorsModule } from './authors/authors.module';
import { BooksModule } from './books/books.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/db-nest-api'),
    UsersModule,
    EmployeesModule,
    ProfilesModule,
    EmbeddedUsersModule,
    AuthorsModule,
    BooksModule,
  ],
})
export class AppModule {}
