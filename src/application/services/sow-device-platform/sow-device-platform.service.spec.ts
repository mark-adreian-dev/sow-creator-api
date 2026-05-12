import { Test, TestingModule } from '@nestjs/testing';
import { SOWDevicePlatformService } from './sow-device-platform.service';

describe('SOWDevicePlatformService', () => {
  let service: SOWDevicePlatformService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SOWDevicePlatformService],
    }).compile();

    service = module.get<SOWDevicePlatformService>(SOWDevicePlatformService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
