import { Module } from '@nestjs/common';
import { AuthorService } from '../../application/services/authors/author.service';
import { AuthorsController } from '../../presentation/controllers/authors/authors.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Author,
  AuthorSchema,
} from '../../infrastructure/schema/author.schema';
import { AuthorRepository } from '../../infrastructure/repository/author.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Author.name, schema: AuthorSchema }]),
  ],
  providers: [AuthorService, AuthorRepository],
  controllers: [AuthorsController],
  exports: [AuthorRepository],
})
export class AuthorsModule {}
