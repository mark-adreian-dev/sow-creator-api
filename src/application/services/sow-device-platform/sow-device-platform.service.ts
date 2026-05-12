import { Injectable } from '@nestjs/common';
import { CreateSOWDevicePlatformDto } from '../../../domain/sow-device-platform/dto/create-sow-device-platform.dto';
import { UpdateSOWDevicePlatformDto } from '../../../domain/sow-device-platform/dto/update-sow-device-platform.dto';
import { SOWDevicePlatformRepository } from '../../../infrastructure/repository/sow-device-platform.repository';
@Injectable()
export class SOWDevicePlatformService {
  constructor(private readonly repository: SOWDevicePlatformRepository) {}

  async create(createSOWDevicePlatformDto: CreateSOWDevicePlatformDto) {
    const createdSOWDevicePlatform =
      await this.repository.createSOWDevicePlatform(createSOWDevicePlatformDto);
    return createdSOWDevicePlatform;
  }

  async findAll() {
    const devicePlatformsList = await this.repository.findSOWDevicePlatforms();
    return devicePlatformsList;
  }

  async findOne(id: string) {
    const devicePlatform = this.repository.findSOWDevicePlatform(id);
    return devicePlatform;
  }

  async update(
    id: string,
    updateSOWDevicePlatformDto: UpdateSOWDevicePlatformDto,
  ) {
    const updatedSOWDevicePlatform = this.repository.updateSOWDevicePlatform(
      id,
      updateSOWDevicePlatformDto,
    );
    return updatedSOWDevicePlatform;
  }

  async remove(id: string) {
    const removeSOWDevicePlatform = this.repository.deleteSOWDevicePlatform(id);
    return removeSOWDevicePlatform;
  }
}
