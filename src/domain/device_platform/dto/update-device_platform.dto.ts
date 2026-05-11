import { PartialType } from '@nestjs/mapped-types';
import { CreateDevicePlatformDto } from './create-device_platform.dto';

export class UpdateDevicePlatformDto extends PartialType(CreateDevicePlatformDto) {}
