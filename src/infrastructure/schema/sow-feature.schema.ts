import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SOWFeatureDocument = SOWFeature & Document;

@Schema({
  timestamps: true,
  versionKey: false,
  collection: 'sow-features',
})
export class SOWFeature {
  @Prop({ required: true })
  platform_id!: string;

  @Prop({
    default: 0,
  })
  feature_index!: number;

  @Prop({
    default: null,
  })
  description!: string;

  @Prop({
    default: null,
  })
  feature_objective!: string;

  @Prop()
  list_index!: number;

  @Prop()
  dev_story_points!: number;

  @Prop()
  test_story_points!: number;

  @Prop({
    default: false,
  })
  isDeleted!: boolean;
}

export const SOWFeatureSchema = SchemaFactory.createForClass(SOWFeature);
