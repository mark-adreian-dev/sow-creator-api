import { Injectable } from '@nestjs/common';

import { SOWApplicationPlatformRepository } from '../../../infrastructure/repository/sow-application-platform.repository';
import { CreateSOWApplicationPlatformDto } from '../../../domain/sow-application-platform/dto/create-sow-application-platform.dto';
import { UpdateSOWApplicationPlatformDto } from '../../../domain/sow-application-platform/dto/update-sow-application-platform.dto';

@Injectable()
export class SOWApplicationPlatformService {
  constructor(private readonly repository: SOWApplicationPlatformRepository) {}

  async create(
    createSOWApplicationPlatformDto: CreateSOWApplicationPlatformDto,
  ) {
    const createdSOWApplicationPlatform =
      await this.repository.createSOWApplicationPlatform(
        createSOWApplicationPlatformDto,
      );
    return createdSOWApplicationPlatform;
  }

  async findAll() {
    const devicePlatformsList =
      await this.repository.findSOWApplicationPlatforms();
    return devicePlatformsList;
  }

  async findOne(id: string) {
    const devicePlatform = this.repository.findSOWApplicationPlatform(id);
    return devicePlatform;
  }

  async update(
    id: string,
    updateSOWApplicationPlatformDto: UpdateSOWApplicationPlatformDto,
  ) {
    const updatedSOWApplicationPlatform =
      this.repository.updateSOWApplicationPlatform(
        id,
        updateSOWApplicationPlatformDto,
      );
    return updatedSOWApplicationPlatform;
  }

  async remove(id: string) {
    const removeSOWApplicationPlatform =
      this.repository.deleteSOWApplicationPlatform(id);
    return removeSOWApplicationPlatform;
  }
}
