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
  platform_id!: string;

  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  feature_index!: number;

  @IsOptional()
  @IsString()
  description!: string;

  @IsOptional()
  @IsString()
  feature_objective!: string;

  @IsNotEmpty()
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

  @IsOptional()
  @IsBoolean()
  is_deleted!: boolean;
}
