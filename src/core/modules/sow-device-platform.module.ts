import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  SOWDevicePlatform,
  SOWDevicePlatformSchema,
} from '../../infrastructure/schema/sow-device-platform.schema';
import { SOWDevicePlatformService } from '../../application/services/sow-device-platform/sow-device-platform.service';
import { SOWDevicePlatformRepository } from '../../infrastructure/repository/sow-device-platform.repository';
import { SOWDevicePlatformController } from '../../presentation/controllers/sow-device-platform/sow-device-platform.controller';
import {
  StatementOfWork,
  StatementOfWorkSchema,
} from '../../infrastructure/schema/statement-of-work.schema';
import {
  DevicePlatform,
  DevicePlatformSchema,
} from '../../infrastructure/schema/device-platform.schema';
import { StatementOfWorkRepository } from '../../infrastructure/repository/statement-of-work.repository';
import { DevicePlatformRepository } from '../../infrastructure/repository/device-platform.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SOWDevicePlatform.name, schema: SOWDevicePlatformSchema },
      { name: StatementOfWork.name, schema: StatementOfWorkSchema },
      { name: DevicePlatform.name, schema: DevicePlatformSchema },
    ]),
  ],

  providers: [
    SOWDevicePlatformService,
    SOWDevicePlatformRepository,
    StatementOfWorkRepository,
    DevicePlatformRepository,
  ],
  controllers: [SOWDevicePlatformController],
})
export class SOWDevicePlatformModule {}
