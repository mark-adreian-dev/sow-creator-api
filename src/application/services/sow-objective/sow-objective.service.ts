import { Injectable } from '@nestjs/common';
import { CreateSOWObjectiveDto } from '../../../domain/sow-objective/dto/create-sow-objective.dto';
import { UpdateSOWObjectiveDto } from '../../../domain/sow-objective/dto/update-sow-objective.dto';
import { SOWObjectiveRepository } from '../../../infrastructure/repository/sow-objectives.repository';

@Injectable()
export class SOWObjectiveService {
  constructor(private readonly repository: SOWObjectiveRepository) {}

  async create(createSOWObjectiveDto: CreateSOWObjectiveDto) {
    const createdSOWObjective = await this.repository.createSOWObjective(
      createSOWObjectiveDto,
    );
    return createdSOWObjective;
  }

  async findAll(id: string) {
    const objectivesList = await this.repository.findSOWObjectives(id);
    return objectivesList;
  }

  async findOne(id: string) {
    const author = this.repository.findSOWObjective(id);
    return author;
  }

  async update(id: string, updateSOWObjectiveDto: UpdateSOWObjectiveDto) {
    const updatedSOWObjective = this.repository.updateSOWObjective(
      id,
      updateSOWObjectiveDto,
    );
    return updatedSOWObjective;
  }

  async remove(id: string) {
    const removeSOWObjective = this.repository.deleteSOWObjective(id);
    return removeSOWObjective;
  }
}
