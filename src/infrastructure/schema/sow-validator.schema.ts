import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { MinLength } from 'class-validator';
import { Document } from 'mongoose';

export type SOWValidatorDocument = SOWValidator & Document;

@Schema({
  timestamps: true,
  versionKey: false,
  collection: 'sow-validators',
})
export class SOWValidator {
  @Prop({ required: true })
  statement_of_work_id!: string;

  @Prop({ required: true })
  validator_id!: string;

  @Prop({ required: true })
  current_position!: string;

  @Prop({
    default: false,
  })
  is_deleted!: boolean;
}

export const SOWValidatorSchema = SchemaFactory.createForClass(SOWValidator);
