import { PartialType } from '@nestjs/mapped-types';
import { CreateDevicePlatformDto } from './create-device-platform.dto';

export class UpdateDevicePlatformDto extends PartialType(
  CreateDevicePlatformDto,
) {}
