import { PartialType } from '@nestjs/mapped-types';
import { CreateSOWCountryDto } from './create-sow-country.dto';

export class UpdateSOWCountryDto extends PartialType(CreateSOWCountryDto) {}
