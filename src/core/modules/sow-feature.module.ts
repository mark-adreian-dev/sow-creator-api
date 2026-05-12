import { Module } from '@nestjs/common';
import {
  SOWFeature,
  SOWFeatureSchema,
} from '../../infrastructure/schema/sow-feature.schema';
import { MongooseModule } from '@nestjs/mongoose';
import {
  SOWApplicationPlatform,
  SOWApplicationPlatformSchema,
} from '../../infrastructure/schema/sow-application-platforms.schema';
import { SOWFeatureService } from '../../application/services/sow-feature/sow-feature.service';
import { SOWFeatureRepository } from '../../infrastructure/repository/sow-feature.repository';
import { SOWApplicationPlatformRepository } from '../../infrastructure/repository/sow-application-platform.repository';
import { SOWFeatureController } from '../../presentation/controllers/sow-feature/sow-feature.controller';
import {
  StatementOfWork,
  StatementOfWorkSchema,
} from '../../infrastructure/schema/statement-of-work.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SOWFeature.name, schema: SOWFeatureSchema },
      { name: StatementOfWork.name, schema: StatementOfWorkSchema },
      {
        name: SOWApplicationPlatform.name,
        schema: SOWApplicationPlatformSchema,
      },
    ]),
  ],
  providers: [
    SOWFeatureService,
    SOWFeatureRepository,
    SOWApplicationPlatformRepository,
  ],
  controllers: [SOWFeatureController],
})
export class SOWFeatureModule {}
