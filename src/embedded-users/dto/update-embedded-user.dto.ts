import { PartialType } from '@nestjs/mapped-types';
import { CreateEmbeddedUserDto } from './create-embedded-user.dto';

export class UpdateEmbeddedUserDto extends PartialType(CreateEmbeddedUserDto) {}
