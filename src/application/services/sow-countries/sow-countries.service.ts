import { Injectable } from '@nestjs/common';
import { CreateSOWCountryDto } from '../../../domain/sow-countries/dto/create-sow-country.dto';
import { UpdateSOWCountryDto } from '../../../domain/sow-countries/dto/update-sow-country.dto';
import { SOWCountriesRepository } from '../../../infrastructure/repository/sow-countries.repository';

@Injectable()
export class SOWCountriesService {
  constructor(private readonly repository: SOWCountriesRepository) {}

  async create(createSOWCountriesDto: CreateSOWCountryDto) {
    const createdSOWCountries = await this.repository.createSOWCountries(
      createSOWCountriesDto,
    );
    return createdSOWCountries;
  }

  async findAll(id: string) {
    const countriessList = await this.repository.findSOWCountriess(id);
    return countriessList;
  }

  async findOne(id: string) {
    const author = this.repository.findSOWCountries(id);
    return author;
  }

  async update(id: string, updateSOWCountriesDto: UpdateSOWCountryDto) {
    const updatedSOWCountries = this.repository.updateSOWCountries(
      id,
      updateSOWCountriesDto,
    );
    return updatedSOWCountries;
  }

  async remove(id: string) {
    const removeSOWCountries = this.repository.deleteSOWCountries(id);
    return removeSOWCountries;
  }
}
