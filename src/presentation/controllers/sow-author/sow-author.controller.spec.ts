import { Test, TestingModule } from '@nestjs/testing';
import { SOWAuthorController } from './sow-author.controller';

describe('SOWAuthorController', () => {
  let controller: SOWAuthorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SOWAuthorController],
    }).compile();

    controller = module.get<SOWAuthorController>(SOWAuthorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
