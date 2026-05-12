import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { DevicePlatformService } from '../../../application/services/device-platform/device-platform.service';
import { CreateDevicePlatformDto } from '../../../domain/device-platform/dto/create-device-platform.dto';
import { UpdateDevicePlatformDto } from '../../../domain/device-platform/dto/update-device-platform.dto';

@Controller('device-platform')
export class DevicePlatformController {
  constructor(private readonly service: DevicePlatformService) {}

  @Get()
  async getDevicePlatforms() {
    return await this.service.findAll();
  }

  @Get(':id')
  getDevicePlatform(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Post()
  createDevicePlatform(
    @Body(new ValidationPipe())
    createDevicePlatformDto: CreateDevicePlatformDto,
  ) {
    return this.service.create(createDevicePlatformDto);
  }

  @Patch(':id')
  updateDevicePlatform(
    @Param('id') id: string,
    @Body(new ValidationPipe())
    updateDevicePlatformDto: UpdateDevicePlatformDto,
  ) {
    return this.service.update(id, updateDevicePlatformDto);
  }

  @Post(':id')
  deleteDevicePlatform(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
