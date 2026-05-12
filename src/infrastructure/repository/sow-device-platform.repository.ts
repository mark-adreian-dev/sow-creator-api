import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  SOWDevicePlatformDocument,
  SOWDevicePlatform,
} from '../schema/sow-device-platform.schema';
import { CreateSOWDevicePlatformDto } from '../../domain/sow-device-platform/dto/create-sow-device-platform.dto';
import { UpdateSOWDevicePlatformDto } from '../../domain/sow-device-platform/dto/update-sow-device-platform.dto';
import {
  StatementOfWork,
  StatementOfWorkDocument,
} from '../schema/statement-of-work.schema';
import {
  DevicePlatform,
  DevicePlatformDocument,
} from '../schema/device-platform.schema';

@Injectable()
export class SOWDevicePlatformRepository {
  constructor(
    @InjectModel(SOWDevicePlatform.name)
    private readonly mongodb: Model<SOWDevicePlatformDocument>,

    @InjectModel(StatementOfWork.name)
    private readonly statementOfWorkSchema: Model<StatementOfWorkDocument>,

    @InjectModel(DevicePlatform.name)
    private readonly devicePlatformSchema: Model<DevicePlatformDocument>,
  ) {}

  async findSOWDevicePlatforms() {
    const devicePlatforms = await this.mongodb.find();
    return devicePlatforms;
  }

  async findSOWDevicePlatform(id: string) {
    const sowDevicePlatform = await this.mongodb.findById(id);
    return sowDevicePlatform;
  }

  async createSOWDevicePlatform(dto: CreateSOWDevicePlatformDto) {
    const sowExist = await this.statementOfWorkSchema.exists({
      _id: dto.statement_of_work_id,
    });

    const devicePlaformExist = await this.devicePlatformSchema.exists({
      _id: dto.device_platform_id,
    });

    if (!sowExist) throw new Error('Statement of Work does not exist');
    if (!devicePlaformExist)
      throw new Error('The specified platform does not exist');

    return await this.mongodb.create(dto);
  }

  async updateSOWDevicePlatform(
    id: string,
    dto: Partial<UpdateSOWDevicePlatformDto>,
  ) {
    return await this.mongodb.findByIdAndUpdate(id, dto, {
      new: true,
      runValidators: true,
    });
  }

  async deleteSOWDevicePlatform(id: string) {
    return await this.mongodb.findByIdAndUpdate(
      id,
      { is_deleted: true },
      { new: true },
    );
  }
}
