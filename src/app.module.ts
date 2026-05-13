import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorModule } from './core/modules/author.module';
import { StatementOfWorkModule } from './core/modules/statement-of-work.module';
import { DevicePlatformModule } from './core/modules/device-platform.module';
import { ConfigModule } from '@nestjs/config';
import { ValidatorModule } from './core/modules/validator.module';
import { SOWTimelineModule } from './core/modules/sow-timeline.module';
import { SOWDevicePlatformModule } from './core/modules/sow-device-platform.module';
import { SOWAuthorModule } from './core/modules/sow-author.module';
import { SOWValidatorModule } from './core/modules/sow-validator.module';
import { SOWObjectiveModule } from './core/modules/sow-objective.module';
import { SOWApplicationPlatformModule } from './core/modules/sow-application-platform.module';
import { SOWFeatureModule } from './core/modules/sow-feature.module';
import { SOWAcceptanceCriteriaModule } from './core/modules/sow-acceptance-criteria.module';

@Module({
  imports: [
    //MongoDB configurations
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI as string),

    //Fetaure Modules
    AuthorModule,
    ValidatorModule,
    DevicePlatformModule,
    StatementOfWorkModule,
    SOWTimelineModule,
    SOWDevicePlatformModule,
    SOWAuthorModule,
    SOWValidatorModule,
    SOWObjectiveModule,
    SOWApplicationPlatformModule,
    SOWFeatureModule,
    SOWAcceptanceCriteriaModule,
  ],
})
export class AppModule {}
