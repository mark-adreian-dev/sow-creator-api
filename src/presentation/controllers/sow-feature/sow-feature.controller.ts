import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { SOWFeatureService } from '../../../application/services/sow-feature/sow-feature.service';
import { CreateSOWFeatureDto } from '../../../domain/sow-feature/dto/create-sow-feature.dto';
import { UpdateSOWFeatureDto } from '../../../domain/sow-feature/dto/update-sow-feature.dto';

@Controller('sow-feature')
export class SOWFeatureController {
  constructor(private readonly service: SOWFeatureService) {}

  @Get()
  async getSOWFeatures() {
    return await this.service.findAll();
  }

  @Get(':id')
  getSOWFeature(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Post()
  createSOWFeature(
    @Body(new ValidationPipe())
    createSOWFeatureDto: CreateSOWFeatureDto,
  ) {
    return this.service.create(createSOWFeatureDto);
  }

  @Patch(':id')
  updateSOWFeature(
    @Param('id') id: string,
    @Body(new ValidationPipe())
    updateSOWFeatureDto: UpdateSOWFeatureDto,
  ) {
    return this.service.update(id, updateSOWFeatureDto);
  }

  @Post(':id')
  deleteSOWFeature(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
