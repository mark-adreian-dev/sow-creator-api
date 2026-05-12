import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SOWFeature, SOWFeatureDocument } from '../schema/sow-feature.schema';
import { CreateSOWFeatureDto } from '../../domain/sow-feature/dto/create-sow-feature.dto';
import { UpdateSOWFeatureDto } from '../../domain/sow-feature/dto/update-sow-feature.dto';
import {
  SOWApplicationPlatform,
  SOWApplicationPlatformDocument,
} from '../schema/sow-application-platforms.schema';

@Injectable()
export class SOWFeatureRepository {
  constructor(
    @InjectModel(SOWFeature.name)
    private readonly mongodb: Model<SOWFeatureDocument>,

    @InjectModel(SOWApplicationPlatform.name)
    private readonly sowApplicationPlatformSchema: Model<SOWApplicationPlatformDocument>,
  ) {}

  async findSOWFeatures() {
    const authors = await this.mongodb.find();
    const activeSOWFeatures = authors.filter(
      (author: SOWFeature) => !author.isDeleted,
    );
    return activeSOWFeatures;
  }

  async findSOWFeature(id: string) {
    const author: SOWFeature | null = await this.mongodb.findById(id);
    if (author) return author.isDeleted ? null : author;
    return null;
  }

  async createSOWFeature(dto: CreateSOWFeatureDto) {
    const sowApplcationPlatformExists =
      await this.sowApplicationPlatformSchema.exists({
        _id: dto.platform_id,
      });

    if (!sowApplcationPlatformExists)
      throw new Error('Statement of work does not exist');

    return await this.mongodb.create(dto);
  }

  async updateSOWFeature(id: string, dto: UpdateSOWFeatureDto) {
    return await this.mongodb.findByIdAndUpdate(id, dto);
  }

  async deleteSOWFeature(id: string) {
    return await this.mongodb.findByIdAndUpdate(id, {
      isDeleted: true,
    });
  }
}
