import { Module } from '@nestjs/common';
import { StatementOfWorkService } from '../../application/services/statement-of-work/statement-of-work.service';

@Module({
  providers: [StatementOfWorkService],
  controllers: [StatementOfWorkService],
})
export class StatementOfWorkModule {}
