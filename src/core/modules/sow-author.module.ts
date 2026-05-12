import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  SOWAuthor,
  SOWAuthorSchema,
} from '../../infrastructure/schema/sow-author.schema';
import { SOWAuthorController } from '../../presentation/controllers/sow-author/sow-author.controller';
import { SOWAuthorService } from '../../application/services/sow-author/sow-author.service';
import { SOWAuthorRepository } from '../../infrastructure/repository/sow-author.repository';
import {
  Author,
  AuthorSchema,
} from '../../infrastructure/schema/author.schema';
import {
  StatementOfWork,
  StatementOfWorkSchema,
} from '../../infrastructure/schema/statement-of-work.schema';
import { StatementOfWorkRepository } from '../../infrastructure/repository/statement-of-work.repository';
import { AuthorRepository } from '../../infrastructure/repository/author.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SOWAuthor.name, schema: SOWAuthorSchema },
      { name: Author.name, schema: AuthorSchema },
      { name: StatementOfWork.name, schema: StatementOfWorkSchema },
    ]),
  ],

  providers: [
    SOWAuthorService,
    SOWAuthorRepository,
    StatementOfWorkRepository,
    AuthorRepository,
  ],
  controllers: [SOWAuthorController],
})
export class SOWAuthorModule {}
