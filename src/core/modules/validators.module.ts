import { Module } from '@nestjs/common';
import { ValidatorsController } from '../../presentation/controllers/validators/validators.controller';
import { ValidatorsService } from '../../application/services/validators/validators.service';

@Module({
  providers: [ValidatorsService],
  controllers: [ValidatorsController],
})
export class ValidatorsModule {}
