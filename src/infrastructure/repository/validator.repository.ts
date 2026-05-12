import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Validator, ValidatorDocument } from '../schema/validator.schema';
import { CreateValidatorDto } from '../../domain/validators/dto/create-validator.dto';

@Injectable()
export class ValidatorRepository {
  constructor(
    @InjectModel(Validator.name)
    private readonly mongodb: Model<ValidatorDocument>,
  ) {}

  async findValidators() {
    const validators = await this.mongodb.find();
    const activeValidators = validators.filter(
      (validator: Validator) => !validator.isDeleted,
    );
    return activeValidators;
  }

  async findValidator(id: string) {
    const validator: Validator | null = await this.mongodb.findById(id);
    if (validator) return validator.isDeleted ? null : validator;
    return null;
  }

  async createValidator(dto: CreateValidatorDto) {
    return await this.mongodb.create(dto);
  }

  async updateValidator(id: string, dto: Partial<CreateValidatorDto>) {
    return await this.mongodb.findByIdAndUpdate(id, dto, {
      new: true,
      runValidators: true,
    });
  }

  async deleteValidator(id: string) {
    return await this.mongodb.findByIdAndUpdate(
      id,
      { isDeleted: true },
      { new: true },
    );
  }
}
