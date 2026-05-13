import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UpdateAuthorDto {
  @MinLength(4)
  @IsString()
  @MinLength(1)
  @IsNotEmpty()
  position!: string;
}
