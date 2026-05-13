import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { SOWAcceptanceCriteriaService } from '../../../application/services/sow-acceptance-criteria/sow-acceptance-criteria.service';
import { CreateSOWAcceptanceCriteriaDto } from '../../../domain/sow-acceptance-criteria/dto/create-sow-acceptance-criterion.dto';
import { UpdateSOWAcceptanceCriteriaDto } from '../../../domain/sow-acceptance-criteria/dto/update-sow-acceptance-criterion.dto';

@Controller('sow-acceptance-criteria')
export class SOWAcceptanceCriteriaController {
  constructor(private readonly service: SOWAcceptanceCriteriaService) {}

  @Get()
  async getSOWAcceptanceCriterias() {
    return await this.service.findAll();
  }

  @Get(':id')
  getSOWAcceptanceCriteria(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Post()
  createSOWAcceptanceCriteria(
    @Body(new ValidationPipe())
    createSOWAcceptanceCriteriaDto: CreateSOWAcceptanceCriteriaDto,
  ) {
    return this.service.create(createSOWAcceptanceCriteriaDto);
  }

  @Patch(':id')
  updateSOWAcceptanceCriteria(
    @Param('id') id: string,
    @Body(new ValidationPipe())
    updateSOWAcceptanceCriteriaDto: UpdateSOWAcceptanceCriteriaDto,
  ) {
    return this.service.update(id, updateSOWAcceptanceCriteriaDto);
  }

  @Post(':id')
  deleteSOWAcceptanceCriteria(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
