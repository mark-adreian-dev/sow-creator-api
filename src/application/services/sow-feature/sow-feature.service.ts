import { Injectable } from '@nestjs/common';
import { CreateSOWFeatureDto } from '../../../domain/sow-feature/dto/create-sow-feature.dto';
import { UpdateSOWFeatureDto } from '../../../domain/sow-feature/dto/update-sow-feature.dto';
import { SOWFeatureRepository } from '../../../infrastructure/repository/sow-feature.repository';

@Injectable()
export class SOWFeatureService {
  constructor(private readonly repository: SOWFeatureRepository) {}

  async create(createSOWFeatureDto: CreateSOWFeatureDto) {
    const createdSOWFeature =
      await this.repository.createSOWFeature(createSOWFeatureDto);
    return createdSOWFeature;
  }

  async findAll() {
    const devicePlatformsList = await this.repository.findSOWFeatures();
    return devicePlatformsList;
  }

  async findOne(id: string) {
    const devicePlatform = this.repository.findSOWFeature(id);
    return devicePlatform;
  }

  async update(id: string, updateSOWFeatureDto: UpdateSOWFeatureDto) {
    const updatedSOWFeature = this.repository.updateSOWFeature(
      id,
      updateSOWFeatureDto,
    );
    return updatedSOWFeature;
  }

  async remove(id: string) {
    const removeSOWFeature = this.repository.deleteSOWFeature(id);
    return removeSOWFeature;
  }
}
