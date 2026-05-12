import { Test, TestingModule } from '@nestjs/testing';
import { SOWValidatorService } from './sow-validator.service';

describe('SOWValidatorService', () => {
  let service: SOWValidatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SOWValidatorService],
    }).compile();

    service = module.get<SOWValidatorService>(SOWValidatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
