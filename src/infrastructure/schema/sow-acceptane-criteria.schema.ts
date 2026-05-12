import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SOWAcceptanceCriteriaDocument = SOWAcceptanceCriteria & Document;

@Schema({
  timestamps: true,
  versionKey: false,
  collection: 'sow-acceptance-criteria',
})
export class SOWAcceptanceCriteria {
  @Prop({ required: true })
  feature_id!: string;

  @Prop({
    default: null,
  })
  detail!: string;

  @Prop({ default: null })
  list_index!: number;

  @Prop({
    default: false,
  })
  isDeleted!: boolean;
}

export const SOWAcceptanceCriteriaSchema = SchemaFactory.createForClass(
  SOWAcceptanceCriteria,
);
