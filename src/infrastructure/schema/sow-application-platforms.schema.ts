import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SOWApplicationPlatformDocument = SOWApplicationPlatform & Document;

@Schema({
  timestamps: true,
  versionKey: false,
  collection: 'sow-application-platforms',
})
export class SOWApplicationPlatform {
  @Prop({ required: true })
  statement_of_work_id!: string;

  @Prop({
    default: null,
  })
  platform_name!: string;

  @Prop({
    default: null,
  })
  description!: string;

  @Prop()
  list_index!: number;

  @Prop({
    default: false,
  })
  isDeleted!: boolean;
}

export const SOWApplicationPlatformSchema = SchemaFactory.createForClass(
  SOWApplicationPlatform,
);
