import { Test, TestingModule } from '@nestjs/testing';
import { DevicePlatformService } from './device-platform.service';

describe('DevicePlatformService', () => {
  let service: DevicePlatformService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DevicePlatformService],
    }).compile();

    service = module.get<DevicePlatformService>(DevicePlatformService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
