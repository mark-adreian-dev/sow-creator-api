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
import { StatementOfWorkService } from '../../../application/services/statement-of-work/statement-of-work.service';
import { CreateStatementOfWorkDto } from '../../../domain/statement-of-work/dto/create-statement-of-work.dto';
import { UpdateStatementOfWorkDto } from '../../../domain/statement-of-work/dto/update-statement-of-work.dto';

@Controller('statement-of-work')
export class StatementOfWorkController {
  constructor(private readonly service: StatementOfWorkService) {}

  @Get()
  async getStatementOfWorks() {
    return await this.service.findAll();
  }

  @Get(':id')
  getStatementOfWork(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Post()
  createStatementOfWork(
    @Body(new ValidationPipe())
    createStatementOfWorkDto: CreateStatementOfWorkDto,
  ) {
    return this.service.create(createStatementOfWorkDto);
  }

  @Patch(':id')
  updateStatementOfWork(
    @Param('id') id: string,
    @Body(new ValidationPipe())
    updateStatementOfWorkDto: UpdateStatementOfWorkDto,
  ) {
    return this.service.update(id, updateStatementOfWorkDto);
  }

  @Delete(':id')
  deleteStatementOfWork(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
