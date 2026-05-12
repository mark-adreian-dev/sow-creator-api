import { PartialType } from '@nestjs/mapped-types';
import { CreateSOWValidatorDto } from './create-sow-validator.dto';

export class UpdateSOWValidatorDto extends PartialType(CreateSOWValidatorDto) {}
