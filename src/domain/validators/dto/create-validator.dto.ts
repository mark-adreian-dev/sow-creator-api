import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateValidatorDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  name!: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  position!: string;
}
