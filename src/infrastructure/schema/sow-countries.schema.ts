import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SOWCountriesDocument = SOWCountries & Document;

@Schema({
  timestamps: true,
  versionKey: false,
  collection: 'sow-countries',
})
export class SOWCountries {
  @Prop({ required: true })
  statement_of_work_id!: string;

  @Prop({ required: true })
  country_name!: string;

  @Prop({
    default: -1,
  })
  list_index!: number;

  @Prop({
    default: false,
  })
  is_deleted!: boolean;
}

export const SOWCountriesSchema = SchemaFactory.createForClass(SOWCountries);
