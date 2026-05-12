import { Injectable } from '@nestjs/common';
import { CreateSOWValidatorDto } from '../../../domain/sow-validator/dto/create-sow-validator.dto';
import { UpdateSOWValidatorDto } from '../../../domain/sow-validator/dto/update-sow-validator.dto';
import { SOWValidatorRepository } from '../../../infrastructure/repository/sow-validator.repository';

@Injectable()
export class SOWValidatorService {
  constructor(private readonly repository: SOWValidatorRepository) {}

  async create(createSOWValidatorDto: CreateSOWValidatorDto) {
    const createdSOWValidator = await this.repository.createSOWValidator(
      createSOWValidatorDto,
    );
    return createdSOWValidator;
  }

  async findAll() {
    const validatorsList = await this.repository.findSOWValidators();
    return validatorsList;
  }

  async findOne(id: string) {
    const validator = this.repository.findSOWValidator(id);
    return validator;
  }

  async update(id: string, updateSOWValidatorDto: UpdateSOWValidatorDto) {
    const updatedSOWValidator = this.repository.updateSOWValidator(
      id,
      updateSOWValidatorDto,
    );
    return updatedSOWValidator;
  }

  async remove(id: string) {
    const removeSOWValidator = this.repository.deleteSOWValidator(id);
    return removeSOWValidator;
  }
}
