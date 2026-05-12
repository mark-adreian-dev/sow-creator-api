import { PartialType } from '@nestjs/mapped-types';
import { CreateSOWAcceptanceCriteriaDto } from './create-sow-acceptance-criterion.dto';

export class UpdateSOWAcceptanceCriteriaDto extends PartialType(
  CreateSOWAcceptanceCriteriaDto,
) {}
