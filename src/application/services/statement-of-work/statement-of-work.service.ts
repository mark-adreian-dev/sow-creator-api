import { Injectable } from '@nestjs/common';
import { CreateStatementOfWorkDto } from '../../../domain/statement-of-work/dto/create-statement-of-work.dto';
import { UpdateStatementOfWorkDto } from '../../../domain/statement-of-work/dto/update-statement-of-work.dto';
import { StatementOfWorkRepository } from '../../../infrastructure/repository/statement-of-work.repository';

@Injectable()
export class StatementOfWorkService {
  constructor(private readonly repository: StatementOfWorkRepository) {}

  async create(createStatementOfWorkDto: CreateStatementOfWorkDto) {
    const createdStatementOfWork = await this.repository.createStatementOfWork(
      createStatementOfWorkDto,
    );
    return createdStatementOfWork;
  }

  async findAll() {
    const statemnetOfWorkList = await this.repository.findStatementOfWorks();
    return statemnetOfWorkList;
  }

  async findOne(id: string) {
    const validator = this.repository.findStatementOfWork(id);
    return validator;
  }

  async update(id: string, updateStatementOfWorkDto: UpdateStatementOfWorkDto) {
    const updatedStatementOfWork = this.repository.updateStatementOfWork(
      id,
      updateStatementOfWorkDto,
    );
    return updatedStatementOfWork;
  }

  async remove(id: string) {
    const removeStatementOfWork = this.repository.deleteStatementOfWork(id);
    return removeStatementOfWork;
  }
}
