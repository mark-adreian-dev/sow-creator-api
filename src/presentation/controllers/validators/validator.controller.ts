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
import { CreateValidatorDto } from '../../../domain/validators/dto/create-validator.dto';
import { UpdateValidatorDto } from '../../../domain/validators/dto/update-validator.dto';
import { ValidatorService } from '../../../application/services/validators/validator.service';

@Controller('validator')
export class ValidatorController {
  constructor(private readonly service: ValidatorService) {}

  @Get()
  async getValidators() {
    return await this.service.findAll();
  }

  @Get(':id')
  getValidator(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Post()
  createValidator(
    @Body(new ValidationPipe()) createValidatorDto: CreateValidatorDto,
  ) {
    return this.service.create(createValidatorDto);
  }

  @Patch(':id')
  updateValidator(
    @Param('id') id: string,
    @Body(new ValidationPipe()) updateValidatorDto: UpdateValidatorDto,
  ) {
    return this.service.update(id, updateValidatorDto);
  }

  @Delete(':id')
  deleteValidator(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
