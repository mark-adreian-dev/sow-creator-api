import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class CreateSOWFeatureDto {
  @IsNotEmpty()
  @IsString()
  @Length(24, 24)
  app_platform_id!: string;

  @IsOptional()
  @IsString()
  description!: string;

  @IsOptional()
  @IsString()
  feature_objective!: string;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  list_index!: number;

  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  dev_story_points!: number;

  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  test_story_points!: number;
}
