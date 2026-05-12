import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AuthorDocument = Author & Document;

@Schema({
  timestamps: true,
  versionKey: false,
  collection: 'authors',
})
export class Author {
  @Prop({ required: true })
  name!: string;

  @Prop()
  position!: string;

  @Prop({
    default: false,
  })
  is_deleted!: boolean;
}

export const AuthorSchema = SchemaFactory.createForClass(Author);
