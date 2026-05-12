import { Injectable } from '@nestjs/common';
import { CreateSOWTimelineDto } from '../../../domain/sow-timeline/dto/create-sow-timeline.dto';
import { SOWTimelineRepository } from '../../../infrastructure/repository/sow-timeline.repository';
import { UpdateSOWTimelineDto } from '../../../domain/sow-timeline/dto/update-sow-timeline.dto';

@Injectable()
export class SOWTimelineService {
  constructor(private readonly repository: SOWTimelineRepository) {}

  async create(createSOWTimelineDto: CreateSOWTimelineDto) {
    const createdSOWTimeline =
      await this.repository.createSOWTimeline(createSOWTimelineDto);
    return createdSOWTimeline;
  }

  async findAll() {
    const statemnetOfWorkList = await this.repository.findSOWTimelines();
    return statemnetOfWorkList;
  }

  async findOne(id: string) {
    const validator = this.repository.findSOWTimeline(id);
    return validator;
  }

  async update(id: string, updateSOWTimelineDto: UpdateSOWTimelineDto) {
    const updatedSOWTimeline = this.repository.updateSOWTimeline(
      id,
      updateSOWTimelineDto,
    );
    return updatedSOWTimeline;
  }

  async remove(id: string) {
    const removeSOWTimeline = this.repository.deleteSOWTimeline(id);
    return removeSOWTimeline;
  }
}
