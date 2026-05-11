import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from '../../../domain/authors/dto/create-author.dto';
import { UpdateAuthorDto } from '../../../domain/authors/dto/update-author.dto';
import { AuthorRepository } from '../../../infrastructure/repository/author.repository';

@Injectable()
export class AuthorService {
  constructor(private readonly repository: AuthorRepository) {}

  async create(createAuthorDto: CreateAuthorDto) {
    const createdAuthor = await this.repository.createAuthor(createAuthorDto);
    return createdAuthor;
  }

  async findAll() {
    const authorsList = await this.repository.findAuthors();
    return authorsList;
  }

  async findOne(id: string) {
    const author = this.repository.findAuthor(id);
    return author;
  }

  async update(id: string, updateAuthorDto: UpdateAuthorDto) {
    const updatedAuthor = this.repository.updateAuthor(id, updateAuthorDto);
    return updatedAuthor;
  }

  async remove(id: string) {
    const removeAuthor = this.repository.deleteAuthor(id);
    return removeAuthor;
  }
}
