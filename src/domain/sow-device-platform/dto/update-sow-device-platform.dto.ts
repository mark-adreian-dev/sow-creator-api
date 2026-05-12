import { PartialType } from '@nestjs/mapped-types';
import { CreateSOWDevicePlatformDto } from './create-sow-device-platform.dto';

export class UpdateSOWDevicePlatformDto extends PartialType(
  CreateSOWDevicePlatformDto,
) {}
