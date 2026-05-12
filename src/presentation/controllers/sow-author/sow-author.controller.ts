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
import { SOWAuthorService } from '../../../application/services/sow-author/sow-author.service';
import { CreateSOWAuthorDto } from '../../../domain/sow-authors/dto/create-sow-author.dto';
import { UpdateSOWAuthorDto } from '../../../domain/sow-authors/dto/update-sow-author.dto';

@Controller('sow-author')
export class SOWAuthorController {
  constructor(private readonly service: SOWAuthorService) {}

  @Get()
  async getSOWAuthors() {
    return await this.service.findAll();
  }

  @Get(':id')
  getSOWAuthor(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Post()
  createSOWAuthor(
    @Body(new ValidationPipe()) createSOWAuthorDto: CreateSOWAuthorDto,
  ) {
    return this.service.create(createSOWAuthorDto);
  }

  @Patch(':id')
  updateSOWAuthor(
    @Param('id') id: string,
    @Body(new ValidationPipe()) updateSOWAuthorDto: UpdateSOWAuthorDto,
  ) {
    return this.service.update(id, updateSOWAuthorDto);
  }

  @Post(':id')
  deleteSOWAuthor(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
