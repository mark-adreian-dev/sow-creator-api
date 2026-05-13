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
import { SOWApplicationPlatformService } from '../../../application/services/sow-application-platform/sow-application-platform.service';
import { CreateSOWApplicationPlatformDto } from '../../../domain/sow-application-platform/dto/create-sow-application-platform.dto';
import { UpdateSOWApplicationPlatformDto } from '../../../domain/sow-application-platform/dto/update-sow-application-platform.dto';

@Controller('sow-application-platform')
export class SOWApplicationPlatformController {
  constructor(private readonly service: SOWApplicationPlatformService) {}

  @Get()
  async getSOWApplicationPlatforms() {
    return await this.service.findAll();
  }

  @Get(':id')
  getSOWApplicationPlatform(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Post()
  createSOWApplicationPlatform(
    @Body(new ValidationPipe())
    createSOWApplicationPlatformDto: CreateSOWApplicationPlatformDto,
  ) {
    return this.service.create(createSOWApplicationPlatformDto);
  }

  @Patch(':id')
  updateSOWApplicationPlatform(
    @Param('id') id: string,
    @Body(new ValidationPipe())
    updateSOWApplicationPlatformDto: UpdateSOWApplicationPlatformDto,
  ) {
    return this.service.update(id, updateSOWApplicationPlatformDto);
  }

  @Delete(':id')
  deleteSOWApplicationPlatform(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
