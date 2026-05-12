import { PartialType } from '@nestjs/mapped-types';
import { CreateStatementOfWorkDto } from './create-statement-of-work.dto';

export class UpdateStatementOfWorkDto extends PartialType(
  CreateStatementOfWorkDto,
) {}
