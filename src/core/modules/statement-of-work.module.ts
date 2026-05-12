import { Module } from '@nestjs/common';
import { StatementOfWorkService } from '../../application/services/statement-of-work/statement-of-work.service';
import { StatementOfWorkController } from '../../presentation/controllers/statement-of-work/statement-of-work.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  StatementOfWork,
  StatementOfWorkSchema,
} from '../../infrastructure/schema/statement-of-work.schema';
import { StatementOfWorkRepository } from '../../infrastructure/repository/statement-of-work.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: StatementOfWork.name, schema: StatementOfWorkSchema },
    ]),
  ],
  providers: [StatementOfWorkService, StatementOfWorkRepository],
  controllers: [StatementOfWorkController],
})
export class StatementOfWorkModule {}
