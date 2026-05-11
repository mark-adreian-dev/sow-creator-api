import { Test, TestingModule } from '@nestjs/testing';
import { DevicePlatformController } from './device-platform.controller';

describe('DevicePlatformController', () => {
  let controller: DevicePlatformController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DevicePlatformController],
    }).compile();

    controller = module.get<DevicePlatformController>(DevicePlatformController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
