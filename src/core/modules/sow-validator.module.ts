import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  SOWValidator,
  SOWValidatorSchema,
} from '../../infrastructure/schema/sow-validator.schema';
import {
  StatementOfWork,
  StatementOfWorkSchema,
} from '../../infrastructure/schema/statement-of-work.schema';
import {
  Validator,
  ValidatorSchema,
} from '../../infrastructure/schema/validator.schema';
import { SOWValidatorService } from '../../application/services/sow-validator/sow-validator.service';
import { SOWValidatorRepository } from '../../infrastructure/repository/sow-validator.repository';
import { SOWValidatorController } from '../../presentation/controllers/sow-validator/sow-validator.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SOWValidator.name, schema: SOWValidatorSchema },
      { name: Validator.name, schema: ValidatorSchema },
      { name: StatementOfWork.name, schema: StatementOfWorkSchema },
    ]),
  ],

  providers: [SOWValidatorService, SOWValidatorRepository],
  controllers: [SOWValidatorController],

  exports: [SOWValidatorRepository],
})
export class SOWValidatorModule {}
