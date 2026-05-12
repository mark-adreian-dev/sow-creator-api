import { Module } from '@nestjs/common';
import { AuthorService } from '../../application/services/authors/author.service';
import { AuthorController } from '../../presentation/controllers/author/author.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Author,
  AuthorSchema,
} from '../../infrastructure/schema/author.schema';
import { AuthorRepository } from '../../infrastructure/repository/author.repository';
import { SOWAuthorModule } from './sow-author.module';
import { SOWValidatorModule } from './sow-validator.module';
import { SOWObjectiveModule } from './sow-objective.module';
import { SOWApplicationPlatformModule } from './sow-application-platform.module';
import { SOWFeatureModule } from './sow-feature.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Author.name, schema: AuthorSchema }]),
    SOWAuthorModule,
    SOWValidatorModule,
    SOWObjectiveModule,
    SOWApplicationPlatformModule,
    SOWFeatureModule,
  ],
  providers: [AuthorService, AuthorRepository],
  controllers: [AuthorController],
  exports: [AuthorRepository],
})
export class AuthorModule {}
