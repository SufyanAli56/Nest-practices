import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmbeddedUsersService } from './embedded-users.service';
import { EmbeddedUsersController } from './embedded-users.controller';
import { EmbeddedUser, EmbeddedUserSchema } from './schemas/embedded-user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: EmbeddedUser.name, schema: EmbeddedUserSchema }]),
  ],
  controllers: [EmbeddedUsersController],
  providers: [EmbeddedUsersService],
})
export class EmbeddedUsersModule {}
