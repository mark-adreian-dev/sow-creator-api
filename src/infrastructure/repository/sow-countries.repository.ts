import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import {
  StatementOfWork,
  StatementOfWorkDocument,
} from '../schema/statement-of-work.schema';
import { dot } from 'node:test/reporters';
import {
  SOWCountries,
  SOWCountriesDocument,
} from '../schema/sow-countries.schema';
import { CreateSOWCountryDto } from '../../domain/sow-countries/dto/create-sow-country.dto';
import { UpdateSOWCountryDto } from '../../domain/sow-countries/dto/update-sow-country.dto';

@Injectable()
export class SOWCountriesRepository {
  constructor(
    @InjectModel(SOWCountries.name)
    private readonly mongodb: Model<SOWCountriesDocument>,

    @InjectModel(StatementOfWork.name)
    private readonly statementOfWorkSchema: Model<StatementOfWorkDocument>,
  ) {}

  async findSOWCountriess(id: string) {
    const objectives = await this.mongodb.find({
      statement_of_work_id: id,
    });
    const activeSOWCountriess = objectives.filter(
      (objective: SOWCountries) => !objective.is_deleted,
    );
    return activeSOWCountriess;
  }

  async findSOWCountries(id: string) {
    const author: SOWCountries | null = await this.mongodb.findById(id);
    if (author) return author.is_deleted ? null : author;
    return null;
  }

  async createSOWCountries(dto: CreateSOWCountryDto) {
    const statementOfWorkExists = await this.statementOfWorkSchema.exists({
      _id: dto.statement_of_work_id,
    });

    if (!statementOfWorkExists)
      throw new Error('Statement of work does not exist');

    return await this.mongodb.create(dto);
  }

  async updateSOWCountries(id: string, dto: UpdateSOWCountryDto) {
    return await this.mongodb.findByIdAndUpdate(id, dto);
  }

  async deleteSOWCountries(id: string) {
    return await this.mongodb.findByIdAndUpdate(id, {
      is_deleted: true,
    });
  }
}
