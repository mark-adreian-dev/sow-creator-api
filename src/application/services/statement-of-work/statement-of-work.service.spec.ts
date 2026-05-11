import { Test, TestingModule } from '@nestjs/testing';
import { StatementOfWorkService } from './statement-of-work.service';

describe('StatementOfWorkService', () => {
  let service: StatementOfWorkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StatementOfWorkService],
    }).compile();

    service = module.get<StatementOfWorkService>(StatementOfWorkService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
