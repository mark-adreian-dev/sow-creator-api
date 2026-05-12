import { MinLength, IsString, IsNotEmpty } from 'class-validator';

export class CreateAuthorDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  name!: string;

  @IsString()
  @MinLength(4)
  @IsNotEmpty()
  position!: string;
}
