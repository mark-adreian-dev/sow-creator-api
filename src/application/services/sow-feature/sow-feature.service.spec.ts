import { Test, TestingModule } from '@nestjs/testing';
import { SOWFeatureService } from './sow-feature.service';

describe('SOWFeatureService', () => {
  let service: SOWFeatureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SOWFeatureService],
    }).compile();

    service = module.get<SOWFeatureService>(SOWFeatureService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
