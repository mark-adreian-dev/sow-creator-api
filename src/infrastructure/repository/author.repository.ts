import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Author, AuthorDocument } from '../schema/author.schema';
import { CreateAuthorDto } from '../../domain/authors/dto/create-author.dto';

@Injectable()
export class AuthorRepository {
  constructor(
    @InjectModel(Author.name)
    private readonly mongodb: Model<AuthorDocument>,
  ) {}

  async findAuthors() {
    const authors = await this.mongodb.find();
    const activeAuthors = authors.filter((author: Author) => !author.isDeleted);
    return activeAuthors;
  }

  async findAuthor(id: string) {
    const author: Author | null = await this.mongodb.findById(id);
    if (author) return author.isDeleted ? null : author;
    return null;
  }

  async createAuthor(dto: CreateAuthorDto) {
    return await this.mongodb.create(dto);
  }

  async updateAuthor(id: string, dto: Partial<CreateAuthorDto>) {
    return await this.mongodb.findByIdAndUpdate(id, dto);
  }

  async deleteAuthor(id: string) {
    return await this.mongodb.findByIdAndUpdate(id, {
      isDeleted: true,
    });
  }
}
