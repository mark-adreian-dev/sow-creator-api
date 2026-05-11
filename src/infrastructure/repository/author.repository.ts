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
    return await this.mongodb.find();
  }

  async findAuthor(id: string) {
    return await this.mongodb.findById(id);
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
