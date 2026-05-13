import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

/**
 * DevelopmentTimeline Phase
 */
@Schema({ _id: false })
export class DevelopmentTimeline {
  @Prop({
    default: null,
  })
  start_date!: Date;

  @Prop({
    default: null,
  })
  end_date!: Date;
}

export const DevelopmentTimelineSchema =
  SchemaFactory.createForClass(DevelopmentTimeline);

/**
 * Testing Phase
 */
@Schema({ _id: false })
export class Testing {
  @Prop({
    default: null,
  })
  start_date!: Date;

  @Prop({
    default: null,
  })
  end_date!: Date;
}

export const TestingSchema = SchemaFactory.createForClass(Testing);

/**
 * Release Dates
 */
@Schema({ _id: false })
export class ReleaseDates {
  @Prop({
    default: null,
  })
  uat_release_date!: Date;

  @Prop({
    default: null,
  })
  prod_release_date!: Date;
}

export const ReleaseDatesSchema = SchemaFactory.createForClass(ReleaseDates);

export type SOWTimelineDocument = SOWTimeline & Document;

@Schema({
  timestamps: false,
  versionKey: false,
  collection: 'sow-timelines',
})
export class SOWTimeline {
  @Prop({ required: true })
  statement_of_work_id!: string;

  @Prop({
    type: DevelopmentTimelineSchema,
    default: () => ({
      start_date: null,
      end_date: null,
    }),
  })
  development_timeline!: DevelopmentTimeline;

  @Prop({
    type: TestingSchema,
    default: () => ({
      start_date: null,
      end_date: null,
    }),
  })
  testing_timeline!: Testing;

  @Prop({
    type: ReleaseDatesSchema,
    default: () => ({
      uat_release_date: null,
      prod_release_date: null,
    }),
  })
  release_dates!: ReleaseDates;

  @Prop({
    default: false,
  })
  is_deleted!: boolean;
}

export const SOWTimelineSchema = SchemaFactory.createForClass(SOWTimeline);
