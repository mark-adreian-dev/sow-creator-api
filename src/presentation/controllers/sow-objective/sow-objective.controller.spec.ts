import { Test, TestingModule } from '@nestjs/testing';
import { SOWObjectiveController } from './sow-objective.controller';

describe('SOWObjectiveController', () => {
  let controller: SOWObjectiveController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SOWObjectiveController],
    }).compile();

    controller = module.get<SOWObjectiveController>(SOWObjectiveController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
