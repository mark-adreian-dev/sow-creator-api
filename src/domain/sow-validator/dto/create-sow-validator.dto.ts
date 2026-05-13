import { IsNotEmpty, IsString, Length, MinLength } from 'class-validator';

export class CreateSOWValidatorDto {
  @IsNotEmpty()
  @IsString()
  @Length(24, 24)
  statement_of_work_id!: string;

  @IsNotEmpty()
  @IsString()
  @Length(24, 24)
  validator_id!: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  current_position!: string;
}
