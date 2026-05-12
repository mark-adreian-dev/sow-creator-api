import { PartialType } from '@nestjs/mapped-types';
import { CreateSOWFeatureDto } from './create-sow-feature.dto';

export class UpdateSOWFeatureDto extends PartialType(CreateSOWFeatureDto) {}
