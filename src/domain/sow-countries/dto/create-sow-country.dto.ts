import { IsNotEmpty, IsString, Length, MinLength } from 'class-validator';

export class CreateSOWCountryDto {
  @IsNotEmpty()
  @IsString()
  @Length(24, 24)
  statement_of_work_id!: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  country_name!: string;
}
