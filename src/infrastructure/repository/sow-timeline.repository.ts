import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  SOWTimeline,
  SOWTimelineDocument,
} from '../schema/sow-timeline.schema';
import { CreateSOWTimelineDto } from '../../domain/sow-timeline/dto/create-sow-timeline.dto';
import {
  StatementOfWork,
  StatementOfWorkDocument,
} from '../schema/statement-of-work.schema';
import { UpdateSOWTimelineDto } from '../../domain/sow-timeline/dto/update-sow-timeline.dto';

@Injectable()
export class SOWTimelineRepository {
  constructor(
    @InjectModel(SOWTimeline.name)
    private readonly mongodb: Model<SOWTimelineDocument>,

    @InjectModel(StatementOfWork.name)
    private readonly statementOfWorkModel: Model<StatementOfWorkDocument>,
  ) {}

  async findSOWTimelines() {
    const validators = await this.mongodb.find();
    const activeSOWTimeline = validators.filter(
      (validator: SOWTimeline) => !validator.is_deleted,
    );
    return activeSOWTimeline;
  }

  async findSOWTimeline(id: string) {
    const validator: SOWTimeline | null = await this.mongodb.findById(id);
    if (validator) return validator.is_deleted ? null : validator;
    return null;
  }

  async createSOWTimeline(dto: CreateSOWTimelineDto) {
    const SOWExists = await this.statementOfWorkModel.exists({
      _id: dto.statement_of_work_id,
    });

    if (!SOWExists) {
      throw new Error('Statement of Work does not exist');
    }

    return await this.mongodb.create(dto);
  }

  async updateSOWTimeline(id: string, dto: Partial<UpdateSOWTimelineDto>) {
    return await this.mongodb.findByIdAndUpdate(id, dto, {
      new: true,
      runValidators: true,
    });
  }

  async deleteSOWTimeline(id: string) {
    return await this.mongodb.findByIdAndUpdate(
      id,
      { is_deleted: true },
      { new: true },
    );
  }
}
