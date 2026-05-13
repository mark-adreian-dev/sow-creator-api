import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Delete,
  ValidationPipe,
} from '@nestjs/common';
import { CreateAuthorDto } from '../../../domain/authors/dto/create-author.dto';
import { UpdateAuthorDto } from '../../../domain/authors/dto/update-author.dto';
import { AuthorService } from '../../../application/services/authors/author.service';

@Controller('author')
export class AuthorController {
  constructor(private readonly service: AuthorService) {}

  @Get()
  async getAuthors() {
    return await this.service.findAll();
  }

  @Get(':id')
  getAuthor(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Post()
  createAuthor(@Body(new ValidationPipe()) createAuthorDto: CreateAuthorDto) {
    return this.service.create(createAuthorDto);
  }

  @Patch(':id')
  updateAuthor(@Param('id') id: string, @Body() dto: UpdateAuthorDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  deleteAuthor(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
