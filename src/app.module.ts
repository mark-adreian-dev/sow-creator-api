import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Author, AuthorSchema } from './infrastructure/schema/author.schema';
import { AuthorsModule } from './core/modules/authors.module';
import { StatementOfWorkModule } from './core/modules/statement-of-work.module';
import { DevicePlatformModule } from './core/modules/device-platform.module';
import { ValidatorsModule } from './core/modules/validators.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    //MongoDB configurations
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI as string),

    //Fetaure Modules
    AuthorsModule,
    // StatementOfWorkModule,
    // DevicePlatformModule,
    // ValidatorsModule,
  ],
})
export class AppModule {}
