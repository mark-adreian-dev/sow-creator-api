import { Module } from '@nestjs/common';
import {
  SOWObjective,
  SOWObjectiveSchema,
} from '../../infrastructure/schema/sow-objectives.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { SOWObjectiveService } from '../../application/services/sow-objective/sow-objective.service';
import { SOWObjectiveRepository } from '../../infrastructure/repository/sow-objectives.repository';
import { SOWObjectiveController } from '../../presentation/controllers/sow-objective/sow-objective.controller';
import { StatementOfWorkRepository } from '../../infrastructure/repository/statement-of-work.repository';
import {
  StatementOfWork,
  StatementOfWorkSchema,
} from '../../infrastructure/schema/statement-of-work.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SOWObjective.name, schema: SOWObjectiveSchema },
      { name: StatementOfWork.name, schema: StatementOfWorkSchema },
    ]),
  ],

  providers: [
    SOWObjectiveService,
    SOWObjectiveRepository,
    StatementOfWorkRepository,
  ],
  controllers: [SOWObjectiveController],
})
export class SOWObjectiveModule {}
