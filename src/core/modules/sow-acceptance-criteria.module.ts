import { Module } from '@nestjs/common';
import {
  SOWAcceptanceCriteria,
  SOWAcceptanceCriteriaSchema,
} from '../../infrastructure/schema/sow-acceptane-criteria.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { SOWAcceptanceCriteriaService } from '../../application/services/sow-acceptance-criteria/sow-acceptance-criteria.service';
import { SOWAcceptanceCriteriaRepository } from '../../infrastructure/repository/sow-acceptance-criteria.repository';
import {
  SOWFeature,
  SOWFeatureSchema,
} from '../../infrastructure/schema/sow-feature.schema';
import { SOWFeatureRepository } from '../../infrastructure/repository/sow-feature.repository';
import { SOWAcceptanceCriteriaController } from '../../presentation/controllers/sow-acceptance-criteria/sow-acceptance-criteria.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SOWAcceptanceCriteria.name, schema: SOWAcceptanceCriteriaSchema },
      { name: SOWFeature.name, schema: SOWFeatureSchema },
    ]),
  ],
  providers: [SOWAcceptanceCriteriaService, SOWAcceptanceCriteriaRepository],
  controllers: [SOWAcceptanceCriteriaController],
})
export class SOWAcceptanceCriteriaModule {}
