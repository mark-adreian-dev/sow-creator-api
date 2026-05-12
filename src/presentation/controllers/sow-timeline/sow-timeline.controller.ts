import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { SOWTimelineService } from '../../../application/services/sow-timeline/sow-timeline.service';
import { CreateSOWTimelineDto } from '../../../domain/sow-timeline/dto/create-sow-timeline.dto';
import { UpdateSOWTimelineDto } from '../../../domain/sow-timeline/dto/update-sow-timeline.dto';

@Controller('sow-timeline')
export class SOWTimelineController {
  constructor(private readonly service: SOWTimelineService) {}

  @Get()
  async getSOWTimelines() {
    return await this.service.findAll();
  }

  @Get(':id')
  getSOWTimeline(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Post()
  createSOWTimeline(
    @Body(new ValidationPipe())
    createSOWTimelineDto: CreateSOWTimelineDto,
  ) {
    return this.service.create(createSOWTimelineDto);
  }

  @Patch(':id')
  updateSOWTimeline(
    @Param('id') id: string,
    @Body(new ValidationPipe()) updateSOWTimelineDto: UpdateSOWTimelineDto,
  ) {
    return this.service.update(id, updateSOWTimelineDto);
  }

  @Post(':id')
  deleteSOWTimeline(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
