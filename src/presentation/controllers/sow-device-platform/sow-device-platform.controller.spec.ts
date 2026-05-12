import { Test, TestingModule } from '@nestjs/testing';
import { SOWDevicePlatformController } from './sow-device-platform.controller';

describe('SOWDevicePlatformController', () => {
  let controller: SOWDevicePlatformController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SOWDevicePlatformController],
    }).compile();

    controller = module.get<SOWDevicePlatformController>(
      SOWDevicePlatformController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
