import { MinLength } from 'class-validator';

export class CreateAuthorDto {
  @MinLength(4)
  name!: string;

  @MinLength(4)
  position!: string;
}
