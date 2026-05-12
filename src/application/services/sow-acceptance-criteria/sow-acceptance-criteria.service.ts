import { Injectable } from '@nestjs/common';
import { CreateSOWAcceptanceCriteriaDto } from '../../../domain/sow-acceptance-criteria/dto/create-sow-acceptance-criterion.dto';
import { UpdateSOWAcceptanceCriteriaDto } from '../../../domain/sow-acceptance-criteria/dto/update-sow-acceptance-criterion.dto';
import { SOWAcceptanceCriteriaRepository } from '../../../infrastructure/repository/sow-acceptance-criteria.repository';

@Injectable()
export class SOWAcceptanceCriteriaService {
  constructor(private readonly repository: SOWAcceptanceCriteriaRepository) {}

  async create(createSOWAcceptanceCriteriaDto: CreateSOWAcceptanceCriteriaDto) {
    const createdSOWAcceptanceCriteria =
      await this.repository.createSOWAcceptanceCriteria(
        createSOWAcceptanceCriteriaDto,
      );
    return createdSOWAcceptanceCriteria;
  }

  async findAll() {
    const statemnetOfWorkList =
      await this.repository.findSOWAcceptanceCriterias();
    return statemnetOfWorkList;
  }

  async findOne(id: string) {
    const validator = this.repository.findSOWAcceptanceCriteria(id);
    return validator;
  }

  async update(
    id: string,
    updateSOWAcceptanceCriteriaDto: UpdateSOWAcceptanceCriteriaDto,
  ) {
    const updatedSOWAcceptanceCriteria =
      this.repository.updateSOWAcceptanceCriteria(
        id,
        updateSOWAcceptanceCriteriaDto,
      );
    return updatedSOWAcceptanceCriteria;
  }

  async remove(id: string) {
    const removeSOWAcceptanceCriteria =
      this.repository.deleteSOWAcceptanceCriteria(id);
    return removeSOWAcceptanceCriteria;
  }
}
