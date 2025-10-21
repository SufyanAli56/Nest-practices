import { Test, TestingModule } from '@nestjs/testing';
import { EmbeddedUsersController } from './embedded-users.controller';
import { EmbeddedUsersService } from './embedded-users.service';

describe('EmbeddedUsersController', () => {
  let controller: EmbeddedUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmbeddedUsersController],
      providers: [EmbeddedUsersService],
    }).compile();

    controller = module.get<EmbeddedUsersController>(EmbeddedUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
