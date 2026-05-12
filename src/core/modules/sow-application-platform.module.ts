import { Module } from '@nestjs/common';
import {
  SOWApplicationPlatform,
  SOWApplicationPlatformSchema,
} from '../../infrastructure/schema/sow-application-platforms.schema';
import { MongooseModule } from '@nestjs/mongoose';
import {
  StatementOfWork,
  StatementOfWorkSchema,
} from '../../infrastructure/schema/statement-of-work.schema';
import { SOWApplicationPlatformService } from '../../application/services/sow-application-platform/sow-application-platform.service';
import { StatementOfWorkRepository } from '../../infrastructure/repository/statement-of-work.repository';
import { SOWApplicationPlatformController } from '../../presentation/controllers/sow-application-platform/sow-application-platform.controller';
import { SOWApplicationPlatformRepository } from '../../infrastructure/repository/sow-application-platform.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: SOWApplicationPlatform.name,
        schema: SOWApplicationPlatformSchema,
      },
      { name: StatementOfWork.name, schema: StatementOfWorkSchema },
    ]),
  ],
  providers: [
    SOWApplicationPlatformService,
    SOWApplicationPlatformRepository,
    StatementOfWorkRepository,
  ],
  controllers: [SOWApplicationPlatformController],
})
export class SOWApplicationPlatformModule {}
