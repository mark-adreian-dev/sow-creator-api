import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class CreateSOWAcceptanceCriteriaDto {
  @IsNotEmpty()
  @IsString()
  @Length(24, 24)
  feature_id!: string;

  @IsOptional()
  @IsString()
  detail!: string;

  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  list_index!: number;

  @IsOptional()
  @IsBoolean()
  is_deleted!: boolean;
}
