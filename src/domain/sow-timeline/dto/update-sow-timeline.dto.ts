import { PartialType } from '@nestjs/mapped-types';
import { CreateSOWTimelineDto } from './create-sow-timeline.dto';

export class UpdateSOWTimelineDto extends PartialType(CreateSOWTimelineDto) {}
