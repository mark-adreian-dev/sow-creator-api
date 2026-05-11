import { Test, TestingModule } from '@nestjs/testing';
import { StatementOfWorkController } from './statement-of-work.controller';

describe('StatementOfWorkController', () => {
  let controller: StatementOfWorkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StatementOfWorkController],
    }).compile();

    controller = module.get<StatementOfWorkController>(StatementOfWorkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
