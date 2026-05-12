import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DevicePlatformDocument = DevicePlatform & Document;

@Schema({
  timestamps: true,
  versionKey: false,
  collection: 'device-platforms',
})
export class DevicePlatform {
  @Prop({ required: true })
  device_platform_name!: string;

  @Prop()
  label!: string;

  @Prop()
  description!: string;

  @Prop({
    default: false,
  })
  isDeleted!: boolean;
}

export const DevicePlatformSchema =
  SchemaFactory.createForClass(DevicePlatform);
