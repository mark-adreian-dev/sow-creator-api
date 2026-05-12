import { MinLength } from 'class-validator';

export class CreateValidatorDto {
  @MinLength(4)
  name!: string;

  @MinLength(4)
  position!: string;
}
