import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateSOWDevicePlatformDto {
  @IsNotEmpty()
  @IsString()
  @Length(24, 24)
  statement_of_work_id!: string;

  @IsNotEmpty()
  @IsString()
  @Length(24, 24)
  device_platform_id!: string;
}
