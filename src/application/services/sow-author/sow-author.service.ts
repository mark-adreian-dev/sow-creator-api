import { Injectable } from '@nestjs/common';
import { CreateSOWAuthorDto } from '../../../domain/sow-authors/dto/create-sow-author.dto';
import { UpdateSOWAuthorDto } from '../../../domain/sow-authors/dto/update-sow-author.dto';
import { SOWAuthorRepository } from '../../../infrastructure/repository/sow-author.repository';

@Injectable()
export class SOWAuthorService {
  constructor(private readonly repository: SOWAuthorRepository) {}

  async create(createSOWAuthorDto: CreateSOWAuthorDto) {
    const createdSOWAuthor =
      await this.repository.createSOWAuthor(createSOWAuthorDto);
    return createdSOWAuthor;
  }

  async findAll() {
    const authorsList = await this.repository.findSOWAuthors();
    return authorsList;
  }

  async findOne(id: string) {
    const author = this.repository.findSOWAuthor(id);
    return author;
  }

  async update(id: string, updateSOWAuthorDto: UpdateSOWAuthorDto) {
    const updatedSOWAuthor = this.repository.updateSOWAuthor(
      id,
      updateSOWAuthorDto,
    );
    return updatedSOWAuthor;
  }

  async remove(id: string) {
    const removeSOWAuthor = this.repository.deleteSOWAuthor(id);
    return removeSOWAuthor;
  }
}
