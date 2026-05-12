import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import {
  SOWAcceptanceCriteria,
  SOWAcceptanceCriteriaDocument,
} from '../schema/sow-acceptane-criteria.schema';
import { CreateSOWAcceptanceCriteriaDto } from '../../domain/sow-acceptance-criteria/dto/create-sow-acceptance-criterion.dto';
import { SOWFeature, SOWFeatureDocument } from '../schema/sow-feature.schema';
import { UpdateSOWAcceptanceCriteriaDto } from '../../domain/sow-acceptance-criteria/dto/update-sow-acceptance-criterion.dto';

@Injectable()
export class SOWAcceptanceCriteriaRepository {
  constructor(
    @InjectModel(SOWAcceptanceCriteria.name)
    private readonly mongodb: Model<SOWAcceptanceCriteriaDocument>,

    @InjectModel(SOWFeature.name)
    private readonly sowFeatureSchema: Model<SOWFeatureDocument>,
  ) {}

  async findSOWAcceptanceCriterias() {
    const authors = await this.mongodb.find();
    const activeSOWAcceptanceCriterias = authors.filter(
      (author: SOWAcceptanceCriteria) => !author.isDeleted,
    );
    return activeSOWAcceptanceCriterias;
  }

  async findSOWAcceptanceCriteria(id: string) {
    const author: SOWAcceptanceCriteria | null =
      await this.mongodb.findById(id);
    if (author) return author.isDeleted ? null : author;
    return null;
  }

  async createSOWAcceptanceCriteria(dto: CreateSOWAcceptanceCriteriaDto) {
    const sowFeatureExists = await this.sowFeatureSchema.exists({
      _id: dto.feature_id,
    });

    if (!sowFeatureExists) throw new Error('Application feature not exist');

    return await this.mongodb.create(dto);
  }

  async updateSOWAcceptanceCriteria(
    id: string,
    dto: UpdateSOWAcceptanceCriteriaDto,
  ) {
    return await this.mongodb.findByIdAndUpdate(id, dto);
  }

  async deleteSOWAcceptanceCriteria(id: string) {
    return await this.mongodb.findByIdAndUpdate(id, {
      isDeleted: true,
    });
  }
}
