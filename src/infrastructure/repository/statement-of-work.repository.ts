import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  StatementOfWork,
  StatementOfWorkDocument,
} from '../schema/statement-of-work.schema';
import { CreateStatementOfWorkDto } from '../../domain/statement-of-work/dto/create-statement-of-work.dto';

@Injectable()
export class StatementOfWorkRepository {
  constructor(
    @InjectModel(StatementOfWork.name)
    private readonly mongodb: Model<StatementOfWorkDocument>,
  ) {}

  async findStatementOfWorks() {
    const statementOfWorks = await this.mongodb.find();
    const activeStatementOfWorks = statementOfWorks.filter(
      (statementOfWork: StatementOfWork) => !statementOfWork.isDeleted,
    );
    return activeStatementOfWorks;
  }

  async findStatementOfWork(id: string) {
    const statementOfWork: StatementOfWork | null =
      await this.mongodb.findById(id);
    if (statementOfWork)
      return statementOfWork.isDeleted ? null : statementOfWork;
    return null;
  }

  async createStatementOfWork(dto: CreateStatementOfWorkDto) {
    return await this.mongodb.create(dto);
  }

  async updateStatementOfWork(
    id: string,
    dto: Partial<CreateStatementOfWorkDto>,
  ) {
    return await this.mongodb.findByIdAndUpdate(id, dto);
  }

  async deleteStatementOfWork(id: string) {
    return await this.mongodb.findByIdAndUpdate(id, {
      isDeleted: true,
    });
  }
}
