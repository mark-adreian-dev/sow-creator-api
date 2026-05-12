import { MinLength } from 'class-validator';

export class CreateDevicePlatformDto {
  @MinLength(1)
  device_platform_name!: string;

  @MinLength(1)
  label!: string;

  @MinLength(4)
  description!: string;
}
