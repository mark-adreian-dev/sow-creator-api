import { Test, TestingModule } from '@nestjs/testing';
import { SOWApplicationPlatformService } from './sow-application-platform.service';

describe('SOWApplicationPlatformService', () => {
  let service: SOWApplicationPlatformService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SOWApplicationPlatformService],
    }).compile();

    service = module.get<SOWApplicationPlatformService>(
      SOWApplicationPlatformService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
