import { PartialType } from '@nestjs/mapped-types';
import { CreateSOWObjectiveDto } from './create-sow-objective.dto';

export class UpdateSOWObjectiveDto extends PartialType(CreateSOWObjectiveDto) {}
