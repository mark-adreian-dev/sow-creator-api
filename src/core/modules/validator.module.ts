import { Module } from '@nestjs/common';
import { ValidatorController } from '../../presentation/controllers/validators/validator.controller';
import { ValidatorService } from '../../application/services/validators/validator.service';
import { ValidatorRepository } from '../../infrastructure/repository/validator.repository';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Validator,
  ValidatorSchema,
} from '../../infrastructure/schema/validator.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Validator.name, schema: ValidatorSchema },
    ]),
  ],
  providers: [ValidatorService, ValidatorRepository],
  controllers: [ValidatorController],
})
export class ValidatorModule {}
