import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateDevicePlatformDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  device_platform_name!: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  label!: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  description!: string;
}
