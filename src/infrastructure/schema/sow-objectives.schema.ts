import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SOWObjectiveDocument = SOWObjective & Document;

@Schema({
  timestamps: true,
  versionKey: false,
  collection: 'sow-objectives',
})
export class SOWObjective {
  @Prop({ required: true })
  statement_of_work_id!: string;

  @Prop({ required: true })
  detail!: string;

  @Prop({
    default: -1,
  })
  list_index!: number;

  @Prop({
    default: false,
  })
  is_deleted!: boolean;
}

export const SOWObjectiveSchema = SchemaFactory.createForClass(SOWObjective);
