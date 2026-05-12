import { Prop } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  MaxLength,
  MinLength,
  minLength,
  ValidateNested,
} from 'class-validator';

/**
 * Development DTO
 */
export class DevelopmentDto {
  @IsOptional()
  @IsDateString()
  start_date?: Date;

  @IsOptional()
  @IsDateString()
  end_date?: Date;
}

/**
 * Testing DTO
 */
export class TestingDto {
  @IsOptional()
  @IsDateString()
  start_date?: Date;

  @IsOptional()
  @IsDateString()
  end_date?: Date;
}

/**
 * Release Dates DTO
 */
export class ReleaseDatesDto {
  @IsOptional()
  @IsDateString()
  uat_release_date?: Date;

  @IsOptional()
  @IsDateString()
  prod_release_date?: Date;
}

export class CreateSOWTimelineDto {
  @IsNotEmpty()
  @IsString()
  @Length(24, 24)
  statement_of_work_id!: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => DevelopmentDto)
  development?: DevelopmentDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => TestingDto)
  testing?: TestingDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => ReleaseDatesDto)
  release_dates?: ReleaseDatesDto;
}
