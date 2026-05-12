import { Test, TestingModule } from '@nestjs/testing';
import { SOWFeatureController } from './sow-feature.controller';

describe('SOWFeatureController', () => {
  let controller: SOWFeatureController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SOWFeatureController],
    }).compile();

    controller = module.get<SOWFeatureController>(SOWFeatureController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
