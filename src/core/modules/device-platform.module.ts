import { Module } from '@nestjs/common';
import { DevicePlatformService } from '../../application/services/device-platform/device-platform.service';
import { DevicePlatformController } from '../../presentation/controllers/device-platform/device-platform.controller';
import { DevicePlatformRepository } from '../../infrastructure/repository/device-platform.repository';
import { MongooseModule } from '@nestjs/mongoose';
import {
  DevicePlatform,
  DevicePlatformSchema,
} from '../../infrastructure/schema/device-platform.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: DevicePlatform.name, schema: DevicePlatformSchema },
    ]),
  ],
  providers: [DevicePlatformService, DevicePlatformRepository],
  controllers: [DevicePlatformController],
})
export class DevicePlatformModule {}
