import { Test, TestingModule } from '@nestjs/testing';
import { SOWAcceptanceCriteriaService } from './sow-acceptance-criteria.service';

describe('SOWAcceptanceCriteriaService', () => {
  let service: SOWAcceptanceCriteriaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SOWAcceptanceCriteriaService],
    }).compile();

    service = module.get<SOWAcceptanceCriteriaService>(
      SOWAcceptanceCriteriaService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
