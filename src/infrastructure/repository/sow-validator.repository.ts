import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSOWValidatorDto } from '../../domain/sow-validator/dto/create-sow-validator.dto';
import {
  SOWValidator,
  SOWValidatorDocument,
} from '../schema/sow-validator.schema';

@Injectable()
export class SOWValidatorRepository {
  constructor(
    @InjectModel(SOWValidator.name)
    private readonly mongodb: Model<SOWValidatorDocument>,
  ) {}

  async findSOWValidators() {
    const sowValidators = await this.mongodb.find();
    return sowValidators;
  }

  async findSOWValidator(id: string) {
    return await this.mongodb.findById(id);
  }

  async createSOWValidator(dto: CreateSOWValidatorDto) {
    return await this.mongodb.create(dto);
  }

  async updateSOWValidator(id: string, dto: Partial<CreateSOWValidatorDto>) {
    return await this.mongodb.findByIdAndUpdate(id, dto);
  }

  async deleteSOWValidator(id: string) {
    return await this.mongodb.findByIdAndUpdate(id, {
      isDeleted: true,
    });
  }
}
