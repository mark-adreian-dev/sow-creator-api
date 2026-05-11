import { Module } from '@nestjs/common';
import { DevicePlatformService } from '../../application/services/device-platform/device-platform.service';
import { DevicePlatformController } from '../../presentation/controllers/device-platform/device-platform.controller';

@Module({
  providers: [DevicePlatformService],
  controllers: [DevicePlatformController],
})
export class DevicePlatformModule {}
