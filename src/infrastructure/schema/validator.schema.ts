import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { MinLength } from 'class-validator';
import { Document } from 'mongoose';

export type ValidatorDocument = Validator & Document;

@Schema({
  timestamps: true,
  versionKey: false,
  collection: 'validators',
})
export class Validator {
  @Prop({ required: true })
  name!: string;

  @Prop()
  position!: string;

  @Prop({
    default: false,
  })
  is_deleted!: boolean;
}

export const ValidatorSchema = SchemaFactory.createForClass(Validator);
