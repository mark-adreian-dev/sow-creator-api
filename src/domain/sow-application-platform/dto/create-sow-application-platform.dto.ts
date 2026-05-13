import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class CreateSOWApplicationPlatformDto {
  @IsNotEmpty()
  @IsString()
  @Length(24, 24)
  statement_of_work_id!: string;

  @IsOptional()
  @IsString()
  platform_name!: string;

  @IsOptional()
  @IsString()
  description!: string;

  @IsOptional()
  @IsBoolean()
  is_deleted!: boolean;
}
