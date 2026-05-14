import { Test, TestingModule } from '@nestjs/testing';
import { SOWCountriesService } from './sow-countries.service';

describe('SOWCountriesService', () => {
  let service: SOWCountriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SOWCountriesService],
    }).compile();

    service = module.get<SOWCountriesService>(SOWCountriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
