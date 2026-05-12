import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { MinLength } from 'class-validator';
import { Document } from 'mongoose';

export type SOWAuthorDocument = SOWAuthor & Document;

@Schema({
  timestamps: true,
  versionKey: false,
  collection: 'sow-authors',
})
export class SOWAuthor {
  @Prop({ required: true })
  statement_of_work_id!: string;

  @Prop({ required: true })
  author_id!: string;

  @Prop({ required: true })
  current_position!: string;

  @Prop({
    default: false,
  })
  isDeleted!: boolean;
}

export const SOWAuthorSchema = SchemaFactory.createForClass(SOWAuthor);
