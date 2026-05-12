import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import {
  StatementOfWork,
  StatementOfWorkDocument,
} from '../schema/statement-of-work.schema';

import {
  SOWApplicationPlatform,
  SOWApplicationPlatformDocument,
} from '../schema/sow-application-platforms.schema';
import { CreateSOWApplicationPlatformDto } from '../../domain/sow-application-platform/dto/create-sow-application-platform.dto';
import { UpdateSOWApplicationPlatformDto } from '../../domain/sow-application-platform/dto/update-sow-application-platform.dto';

@Injectable()
export class SOWApplicationPlatformRepository {
  constructor(
    @InjectModel(SOWApplicationPlatform.name)
    private readonly mongodb: Model<SOWApplicationPlatformDocument>,

    @InjectModel(StatementOfWork.name)
    private readonly statementOfWorkSchema: Model<StatementOfWorkDocument>,
  ) {}

  async findSOWApplicationPlatforms() {
    const authors = await this.mongodb.find();
    const activeSOWApplicationPlatforms = authors.filter(
      (author: SOWApplicationPlatform) => !author.is_deleted,
    );
    return activeSOWApplicationPlatforms;
  }

  async findSOWApplicationPlatform(id: string) {
    const author: SOWApplicationPlatform | null =
      await this.mongodb.findById(id);
    if (author) return author.is_deleted ? null : author;
    return null;
  }

  async createSOWApplicationPlatform(dto: CreateSOWApplicationPlatformDto) {
    const statementOfWorkExists = await this.statementOfWorkSchema.exists({
      _id: dto.statement_of_work_id,
    });

    if (!statementOfWorkExists)
      throw new Error('Statement of work does not exist');

    return await this.mongodb.create(dto);
  }

  async updateSOWApplicationPlatform(
    id: string,
    dto: UpdateSOWApplicationPlatformDto,
  ) {
    return await this.mongodb.findByIdAndUpdate(id, dto);
  }

  async deleteSOWApplicationPlatform(id: string) {
    return await this.mongodb.findByIdAndUpdate(id, {
      is_deleted: true,
    });
  }
}
