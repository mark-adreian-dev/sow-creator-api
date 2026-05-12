import { Test, TestingModule } from '@nestjs/testing';
import { SOWTimelineService } from './sow-timeline.service';

describe('SOWTimelineService', () => {
  let service: SOWTimelineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SOWTimelineService],
    }).compile();

    service = module.get<SOWTimelineService>(SOWTimelineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
