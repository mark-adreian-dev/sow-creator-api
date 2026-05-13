import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Delete,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { SOWDevicePlatformService } from '../../../application/services/sow-device-platform/sow-device-platform.service';
import { CreateSOWDevicePlatformDto } from '../../../domain/sow-device-platform/dto/create-sow-device-platform.dto';
import { UpdateSOWDevicePlatformDto } from '../../../domain/sow-device-platform/dto/update-sow-device-platform.dto';

@Controller('sow-device-platform')
export class SOWDevicePlatformController {
  constructor(private readonly service: SOWDevicePlatformService) {}

  @Get()
  async getSOWDevicePlatforms() {
    return await this.service.findAll();
  }

  @Get(':id')
  getSOWDevicePlatform(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Post()
  createSOWDevicePlatform(
    @Body(new ValidationPipe())
    createSOWDevicePlatformDto: CreateSOWDevicePlatformDto,
  ) {
    return this.service.create(createSOWDevicePlatformDto);
  }

  @Patch(':id')
  updateSOWDevicePlatform(
    @Param('id') id: string,
    @Body(new ValidationPipe())
    updateSOWDevicePlatformDto: UpdateSOWDevicePlatformDto,
  ) {
    return this.service.update(id, updateSOWDevicePlatformDto);
  }

  @Delete(':id')
  deleteSOWDevicePlatform(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
