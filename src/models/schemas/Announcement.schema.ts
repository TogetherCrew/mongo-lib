import { Schema } from 'mongoose';
import { type IAnnouncement, type AnnouncementModel } from '../../interfaces/Announcement.interface';
import { type ObjectId } from 'mongodb';
import { paginate, toJSON } from './plugins';

const announcementDataSchema = new Schema(
  {
    platform: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Platform',
    },
    template: {
      type: String,
      required: true,
    },
    options: {
      type: Schema.Types.Mixed,
    },
  },
  { _id: false },
);

const AnnouncementSchema = new Schema<IAnnouncement, AnnouncementModel>(
  {
    community: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Community',
    },
    title: {
      type: String,
      required: true,
    },
    scheduledAt: {
      type: Date,
      required: true,
    },
    draft: {
      type: Boolean,
      required: true,
    },
    jobId: Number,
    createdBy: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    updatedBy: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    deletedAt: Date,
    deletedBy: Schema.Types.ObjectId,
    data: [announcementDataSchema],
  },
  { timestamps: true },
);

AnnouncementSchema.method('softDelete', async function softDelete(userId: ObjectId) {
  this.deletedAt = Date.now();
  this.deletedBy = userId;
  await this.save();
});

// Plugins
AnnouncementSchema.plugin(toJSON);
AnnouncementSchema.plugin(paginate);

export default AnnouncementSchema;
