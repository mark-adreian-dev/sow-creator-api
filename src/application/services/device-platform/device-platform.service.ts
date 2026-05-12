import { Injectable } from '@nestjs/common';

import { DevicePlatformRepository } from '../../../infrastructure/repository/device-platform.repository';
import { CreateDevicePlatformDto } from '../../../domain/device-platform/dto/create-device-platform.dto';
import { UpdateDevicePlatformDto } from '../../../domain/device-platform/dto/update-device-platform.dto';

@Injectable()
export class DevicePlatformService {
  constructor(private readonly repository: DevicePlatformRepository) {}

  async create(createDevicePlatformDto: CreateDevicePlatformDto) {
    const createdDevicePlatform = await this.repository.createDevicePlatform(
      createDevicePlatformDto,
    );
    return createdDevicePlatform;
  }

  async findAll() {
    const devicePlatformsList = await this.repository.findDevicePlatforms();
    return devicePlatformsList;
  }

  async findOne(id: string) {
    const devicePlatform = this.repository.findDevicePlatform(id);
    return devicePlatform;
  }

  async update(id: string, updateDevicePlatformDto: UpdateDevicePlatformDto) {
    const updatedDevicePlatform = this.repository.updateDevicePlatform(
      id,
      updateDevicePlatformDto,
    );
    return updatedDevicePlatform;
  }

  async remove(id: string) {
    const removeDevicePlatform = this.repository.deleteDevicePlatform(id);
    return removeDevicePlatform;
  }
}
