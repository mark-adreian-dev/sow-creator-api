import { Test, TestingModule } from '@nestjs/testing';
import { SOWCountriesController } from './sow-countries.controller';

describe('SOWCountriesController', () => {
  let controller: SOWCountriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SOWCountriesController],
    }).compile();

    controller = module.get<SOWCountriesController>(SOWCountriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
