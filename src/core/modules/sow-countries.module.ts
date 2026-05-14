import { Module } from '@nestjs/common';
import {
  SOWCountries,
  SOWCountriesSchema,
} from '../../infrastructure/schema/sow-countries.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { SOWCountriesService } from '../../application/services/sow-countries/sow-countries.service';
import { SOWCountriesRepository } from '../../infrastructure/repository/sow-countries.repository';
import { SOWCountriesController } from '../../presentation/controllers/sow-countries/sow-countries.controller';
import { StatementOfWork } from '../../infrastructure/schema/statement-of-work.schema';
import { StatementOfWorkRepository } from '../../infrastructure/repository/statement-of-work.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SOWCountries.name, schema: SOWCountriesSchema },
      { name: StatementOfWork.name, schema: SOWCountriesSchema },
    ]),
  ],

  providers: [
    SOWCountriesService,
    SOWCountriesRepository,
    StatementOfWorkRepository,
  ],
  controllers: [SOWCountriesController],
})
export class SOWCountriesModule {}
