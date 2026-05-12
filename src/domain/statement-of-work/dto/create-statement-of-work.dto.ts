import { IsDateString, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateStatementOfWorkDto {
  @IsOptional()
  @IsString()
  @MinLength(4)
  project_name?: string;

  @IsOptional()
  @IsString()
  @MinLength(4)
  client_name?: string;

  @IsOptional()
  @IsDateString()
  submission_date?: Date;

  @IsOptional()
  @IsDateString()
  start_date?: Date;

  @IsOptional()
  @IsString()
  specifications?: string;
}
