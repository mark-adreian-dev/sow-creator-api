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
import { SOWObjectiveService } from '../../../application/services/sow-objective/sow-objective.service';
import { CreateSOWObjectiveDto } from '../../../domain/sow-objective/dto/create-sow-objective.dto';
import { UpdateSOWObjectiveDto } from '../../../domain/sow-objective/dto/update-sow-objective.dto';

@Controller('sow-objective')
export class SOWObjectiveController {
  constructor(private readonly service: SOWObjectiveService) {}

  @Get()
  async getSOWObjectives() {
    return await this.service.findAll();
  }

  @Get(':id')
  getSOWObjective(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Post()
  createSOWObjective(
    @Body(new ValidationPipe()) createSOWObjectiveDto: CreateSOWObjectiveDto,
  ) {
    return this.service.create(createSOWObjectiveDto);
  }

  @Patch(':id')
  updateSOWObjective(
    @Param('id') id: string,
    @Body(new ValidationPipe()) updateSOWObjectiveDto: UpdateSOWObjectiveDto,
  ) {
    return this.service.update(id, updateSOWObjectiveDto);
  }

  @Delete(':id')
  deleteSOWObjective(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
