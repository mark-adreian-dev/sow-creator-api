import { Test, TestingModule } from '@nestjs/testing';
import { SOWApplicationPlatformController } from './sow-application-platform.controller';

describe('SOWApplicationPlatformController', () => {
  let controller: SOWApplicationPlatformController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SOWApplicationPlatformController],
    }).compile();

    controller = module.get<SOWApplicationPlatformController>(
      SOWApplicationPlatformController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
