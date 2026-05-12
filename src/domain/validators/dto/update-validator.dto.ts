import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UpdateValidatorDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  position!: string;
}
