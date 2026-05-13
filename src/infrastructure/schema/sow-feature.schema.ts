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
  app_platform_id!: string;

  @Prop({
    default: null,
  })
  description!: string;

  @Prop({
    default: null,
  })
  feature_objective!: string;

  @Prop({
    default: -1,
  })
  list_index!: number;

  @Prop({
    default: 0,
  })
  dev_story_points!: number;

  @Prop({
    default: 0,
  })
  test_story_points!: number;

  @Prop({
    default: false,
  })
  is_deleted!: boolean;
}

export const SOWFeatureSchema = SchemaFactory.createForClass(SOWFeature);
