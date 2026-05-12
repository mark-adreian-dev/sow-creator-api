import { PartialType } from '@nestjs/mapped-types';
import { CreateSOWAuthorDto } from './create-sow-author.dto';

export class UpdateSOWAuthorDto extends PartialType(CreateSOWAuthorDto) {}
