import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SOWTimelineService } from '../../application/services/sow-timeline/sow-timeline.service';
import { SOWTimelineRepository } from '../../infrastructure/repository/sow-timeline.repository';
import { SOWTimelineController } from '../../presentation/controllers/sow-timeline/sow-timeline.controller';
import {
  SOWTimelineSchema,
  SOWTimeline,
} from '../../infrastructure/schema/sow-timeline.schema';
import { StatementOfWorkRepository } from '../../infrastructure/repository/statement-of-work.repository';
import {
  StatementOfWork,
  StatementOfWorkSchema,
} from '../../infrastructure/schema/statement-of-work.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SOWTimeline.name, schema: SOWTimelineSchema },
      { name: StatementOfWork.name, schema: StatementOfWorkSchema },
    ]),
  ],
  providers: [
    SOWTimelineService,
    SOWTimelineRepository,
    StatementOfWorkRepository,
  ],
  controllers: [SOWTimelineController],
})
export class SOWTimelineModule {}
