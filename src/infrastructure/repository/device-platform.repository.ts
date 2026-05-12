import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  DevicePlatform,
  DevicePlatformDocument,
} from '../schema/device-platform.schema';
import { CreateDevicePlatformDto } from '../../domain/device-platform/dto/create-device-platform.dto';

@Injectable()
export class DevicePlatformRepository {
  constructor(
    @InjectModel(DevicePlatform.name)
    private readonly mongodb: Model<DevicePlatformDocument>,
  ) {}

  async findDevicePlatforms() {
    const devicePlatforms = await this.mongodb.find();
    const activeDevicePlatforms = devicePlatforms.filter(
      (validator: DevicePlatform) => !validator.isDeleted,
    );
    return activeDevicePlatforms;
  }

  async findDevicePlatform(id: string) {
    const validator: DevicePlatform | null = await this.mongodb.findById(id);
    if (validator) return validator.isDeleted ? null : validator;
    return null;
  }

  async createDevicePlatform(dto: CreateDevicePlatformDto) {
    return await this.mongodb.create(dto);
  }

  async updateDevicePlatform(
    id: string,
    dto: Partial<CreateDevicePlatformDto>,
  ) {
    return await this.mongodb.findByIdAndUpdate(id, dto, {
      new: true,
      runValidators: true,
    });
  }

  async deleteDevicePlatform(id: string) {
    return await this.mongodb.findByIdAndUpdate(
      id,
      { isDeleted: true },
      { new: true },
    );
  }
}
