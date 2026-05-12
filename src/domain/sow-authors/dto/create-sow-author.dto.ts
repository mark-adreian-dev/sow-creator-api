import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  MinLength,
} from 'class-validator';

export class CreateSOWAuthorDto {
  @IsNotEmpty()
  @IsString()
  @Length(24, 24)
  statement_of_work_id!: string;

  @IsNotEmpty()
  @IsString()
  @Length(24, 24)
  author_id!: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  current_position!: string;
}
