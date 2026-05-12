import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { SOWValidatorService } from '../../../application/services/sow-validator/sow-validator.service';
import { CreateSOWValidatorDto } from '../../../domain/sow-validator/dto/create-sow-validator.dto';
import { UpdateSOWValidatorDto } from '../../../domain/sow-validator/dto/update-sow-validator.dto';

@Controller('sow-validator')
export class SOWValidatorController {
  constructor(private readonly service: SOWValidatorService) {}

  @Get()
  async getSOWValidators() {
    return await this.service.findAll();
  }

  @Get(':id')
  getSOWValidator(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Post()
  createSOWValidator(
    @Body(new ValidationPipe()) createSOWValidatorDto: CreateSOWValidatorDto,
  ) {
    return this.service.create(createSOWValidatorDto);
  }

  @Patch(':id')
  updateSOWValidator(
    @Param('id') id: string,
    @Body(new ValidationPipe()) updateSOWValidatorDto: UpdateSOWValidatorDto,
  ) {
    return this.service.update(id, updateSOWValidatorDto);
  }

  @Post(':id')
  deleteSOWValidator(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
