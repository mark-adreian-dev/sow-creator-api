import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StatementOfWorkDocument = StatementOfWork & Document;

/**
 * Main Statement Of Work
 */
@Schema({
  timestamps: true,
  versionKey: false,
  collection: 'statement-of-works',
})
export class StatementOfWork {
  @Prop({
    default: null,
  })
  project_name!: string;

  @Prop({
    default: null,
  })
  client_name!: string;

  @Prop({
    default: null,
  })
  submission_date!: Date;

  @Prop({
    default: null,
  })
  start_date!: Date;

  @Prop({
    default: null,
  })
  specifications!: string;

  @Prop({
    default: false,
  })
  isDeleted!: boolean;
}

export const StatementOfWorkSchema =
  SchemaFactory.createForClass(StatementOfWork);
