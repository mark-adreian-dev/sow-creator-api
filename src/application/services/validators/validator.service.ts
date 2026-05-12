import { Injectable } from '@nestjs/common';
import { CreateValidatorDto } from '../../../domain/validators/dto/create-validator.dto';
import { UpdateValidatorDto } from '../../../domain/validators/dto/update-validator.dto';
import { ValidatorRepository } from '../../../infrastructure/repository/validator.repository';

@Injectable()
export class ValidatorService {
  constructor(private readonly repository: ValidatorRepository) {}

  async create(createValidatorDto: CreateValidatorDto) {
    const createdValidator =
      await this.repository.createValidator(createValidatorDto);
    return createdValidator;
  }

  async findAll() {
    const validatorsList = await this.repository.findValidators();
    return validatorsList;
  }

  async findOne(id: string) {
    const validator = this.repository.findValidator(id);
    return validator;
  }

  async update(id: string, updateValidatorDto: UpdateValidatorDto) {
    const updatedValidator = this.repository.updateValidator(
      id,
      updateValidatorDto,
    );
    return updatedValidator;
  }

  async remove(id: string) {
    const removeValidator = this.repository.deleteValidator(id);
    return removeValidator;
  }
}
