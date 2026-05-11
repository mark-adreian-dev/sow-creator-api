import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { MinLength } from 'class-validator';
import { Document } from 'mongoose';

export type AuthorDocument = Author & Document;

@Schema({
  timestamps: true,
  versionKey: false,
})
export class Author {
  @Prop({ required: true })
  name!: string;

  @Prop()
  @MinLength(1)
  position!: string;

  @Prop()
  isDeleted!: boolean;
}

export const AuthorSchema = SchemaFactory.createForClass(Author);
