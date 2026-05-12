import { Test, TestingModule } from '@nestjs/testing';
import { SOWAuthorService } from './sow-author.service';

describe('SOWAuthorService', () => {
  let service: SOWAuthorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SOWAuthorService],
    }).compile();

    service = module.get<SOWAuthorService>(SOWAuthorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
