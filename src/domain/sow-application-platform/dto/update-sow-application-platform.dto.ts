import { PartialType } from '@nestjs/mapped-types';
import { CreateSOWApplicationPlatformDto } from './create-sow-application-platform.dto';

export class UpdateSOWApplicationPlatformDto extends PartialType(
  CreateSOWApplicationPlatformDto,
) {}
