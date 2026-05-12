import { Test, TestingModule } from '@nestjs/testing';
import { SOWObjectiveService } from './sow-objective.service';

describe('SOWObjectiveService', () => {
  let service: SOWObjectiveService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SOWObjectiveService],
    }).compile();

    service = module.get<SOWObjectiveService>(SOWObjectiveService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
