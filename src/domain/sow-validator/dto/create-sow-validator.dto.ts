import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateSOWValidatorDto {
  @IsNotEmpty()
  @IsString()
  @Length(24, 24)
  statement_of_work_id!: string;

  @IsNotEmpty()
  @IsString()
  @Length(24, 24)
  validator_id!: string;
}
