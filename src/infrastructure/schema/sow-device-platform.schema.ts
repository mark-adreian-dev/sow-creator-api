import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SOWDevicePlatformDocument = SOWDevicePlatform & Document;

@Schema({
  timestamps: true,
  versionKey: false,
  collection: 'sow-device-platforms',
})
export class SOWDevicePlatform {
  @Prop({ required: true })
  device_platform_id!: string;

  @Prop({ required: true })
  statement_of_work_id!: string;

  @Prop({ default: false })
  is_available!: boolean;
}

export const SOWDevicePlatformSchema =
  SchemaFactory.createForClass(SOWDevicePlatform);
