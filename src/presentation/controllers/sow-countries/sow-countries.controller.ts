import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { SOWCountriesService } from '../../../application/services/sow-countries/sow-countries.service';
import { CreateSOWCountryDto } from '../../../domain/sow-countries/dto/create-sow-country.dto';
import { UpdateSOWCountryDto } from '../../../domain/sow-countries/dto/update-sow-country.dto';

@Controller('sow-countries')
export class SOWCountriesController {
  constructor(private readonly service: SOWCountriesService) {}

  @Get(':id/countries')
  async getSOWCountriess(@Param('id') id: string) {
    return await this.service.findAll(id);
  }

  @Get(':id')
  getSOWCountries(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Post()
  createSOWCountries(
    @Body(new ValidationPipe()) createSOWCountriesDto: CreateSOWCountryDto,
  ) {
    return this.service.create(createSOWCountriesDto);
  }

  @Patch(':id')
  updateSOWCountries(
    @Param('id') id: string,
    @Body(new ValidationPipe()) updateSOWCountriesDto: UpdateSOWCountryDto,
  ) {
    return this.service.update(id, updateSOWCountriesDto);
  }

  @Delete(':id')
  deleteSOWCountries(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
