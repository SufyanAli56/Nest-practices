import { Test, TestingModule } from '@nestjs/testing';
import { EmbeddedUsersService } from './embedded-users.service';

describe('EmbeddedUsersService', () => {
  let service: EmbeddedUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmbeddedUsersService],
    }).compile();

    service = module.get<EmbeddedUsersService>(EmbeddedUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
