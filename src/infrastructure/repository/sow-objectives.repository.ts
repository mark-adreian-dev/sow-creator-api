import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  SOWObjective,
  SOWObjectiveDocument,
} from '../schema/sow-objectives.schema';
import { CreateSOWObjectiveDto } from '../../domain/sow-objective/dto/create-sow-objective.dto';
import { UpdateSOWObjectiveDto } from '../../domain/sow-objective/dto/update-sow-objective.dto';
import {
  StatementOfWork,
  StatementOfWorkDocument,
} from '../schema/statement-of-work.schema';
import { dot } from 'node:test/reporters';

@Injectable()
export class SOWObjectiveRepository {
  constructor(
    @InjectModel(SOWObjective.name)
    private readonly mongodb: Model<SOWObjectiveDocument>,

    @InjectModel(StatementOfWork.name)
    private readonly statementOfWorkSchema: Model<StatementOfWorkDocument>,
  ) {}

  async findSOWObjectives() {
    const authors = await this.mongodb.find();
    const activeSOWObjectives = authors.filter(
      (author: SOWObjective) => !author.isDeleted,
    );
    return activeSOWObjectives;
  }

  async findSOWObjective(id: string) {
    const author: SOWObjective | null = await this.mongodb.findById(id);
    if (author) return author.isDeleted ? null : author;
    return null;
  }

  async createSOWObjective(dto: CreateSOWObjectiveDto) {
    const statementOfWorkExists = await this.statementOfWorkSchema.exists({
      _id: dto.statement_of_work_id,
    });

    if (!statementOfWorkExists)
      throw new Error('Statement of work does not exist');

    return await this.mongodb.create(dto);
  }

  async updateSOWObjective(id: string, dto: UpdateSOWObjectiveDto) {
    return await this.mongodb.findByIdAndUpdate(id, dto);
  }

  async deleteSOWObjective(id: string) {
    return await this.mongodb.findByIdAndUpdate(id, {
      isDeleted: true,
    });
  }
}
