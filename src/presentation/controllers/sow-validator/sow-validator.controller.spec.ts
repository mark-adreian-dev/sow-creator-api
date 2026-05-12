import { Test, TestingModule } from '@nestjs/testing';
import { SOWValidatorController } from './sow-validator.controller';

describe('SOWValidatorController', () => {
  let controller: SOWValidatorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SOWValidatorController],
    }).compile();

    controller = module.get<SOWValidatorController>(SOWValidatorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
