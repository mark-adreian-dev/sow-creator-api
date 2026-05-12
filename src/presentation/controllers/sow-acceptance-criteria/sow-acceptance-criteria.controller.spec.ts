import { Test, TestingModule } from '@nestjs/testing';
import { SOWAcceptanceCriteriaController } from './sow-acceptance-criteria.controller';

describe('SOWAcceptanceCriteriaController', () => {
  let controller: SOWAcceptanceCriteriaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SOWAcceptanceCriteriaController],
    }).compile();

    controller = module.get<SOWAcceptanceCriteriaController>(
      SOWAcceptanceCriteriaController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
