import { Test, TestingModule } from '@nestjs/testing';
import { SOWTimelineController } from './sow-timeline.controller';

describe('SOWTimelineController', () => {
  let controller: SOWTimelineController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SOWTimelineController],
    }).compile();

    controller = module.get<SOWTimelineController>(SOWTimelineController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
