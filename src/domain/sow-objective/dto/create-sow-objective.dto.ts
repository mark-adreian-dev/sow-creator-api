import { Type } from 'class-transformer';
import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  Length,
  MinLength,
} from 'class-validator';

export class CreateSOWObjectiveDto {
  @IsNotEmpty()
  @IsString()
  @Length(24, 24)
  statement_of_work_id!: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  detail!: string;
}
