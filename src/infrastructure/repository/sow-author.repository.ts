import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSOWAuthorDto } from '../../domain/sow-authors/dto/create-sow-author.dto';
import { SOWAuthor, SOWAuthorDocument } from '../schema/sow-author.schema';
import {
  StatementOfWork,
  StatementOfWorkDocument,
} from '../schema/statement-of-work.schema';
import { Author, AuthorDocument } from '../schema/author.schema';

@Injectable()
export class SOWAuthorRepository {
  constructor(
    @InjectModel(SOWAuthor.name)
    private readonly mongodb: Model<SOWAuthorDocument>,

    @InjectModel(StatementOfWork.name)
    private readonly statementOfWorkSchema: Model<StatementOfWorkDocument>,

    @InjectModel(Author.name)
    private readonly authorSchema: Model<AuthorDocument>,
  ) {}

  async findSOWAuthors() {
    const sowAuthors = await this.mongodb.find();
    return sowAuthors;
  }

  async findSOWAuthor(id: string) {
    return await this.mongodb.findById(id);
  }

  async createSOWAuthor(dto: CreateSOWAuthorDto) {
    const authorExists = await this.authorSchema.exists({
      _id: dto.author_id,
    });

    const statementOfWorkExists = await this.statementOfWorkSchema.exists({
      _id: dto.statement_of_work_id,
    });

    if (!authorExists) throw new Error('Author does not exist.');
    if (!statementOfWorkExists)
      throw new Error('Statement of work does not exist.');

    return await this.mongodb.create(dto);
  }

  async updateSOWAuthor(id: string, dto: Partial<CreateSOWAuthorDto>) {
    return await this.mongodb.findByIdAndUpdate(id, dto);
  }

  async deleteSOWAuthor(id: string) {
    return await this.mongodb.findByIdAndUpdate(id, {
      isDeleted: true,
    });
  }
}
