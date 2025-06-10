import { Schema } from 'mongoose';

import { IThread, ThreadModel } from '../../interfaces';
import { paginate, toJSON } from './plugins';

const threadMetadataSchema = new Schema(
  {
    archived: {
      type: Boolean,
      required: true,
      default: false,
    },
    auto_archive_duration: {
      type: Number,
      required: true,
      enum: [60, 1440, 4320, 10080],
    },
    archive_timestamp: {
      type: String,
      required: true,
    },
    locked: {
      type: Boolean,
      required: true,
      default: false,
    },
    invitable: {
      type: Boolean,
      default: null,
    },
    create_timestamp: {
      type: String,
      default: null,
    },
  },
  { _id: false },
);

const threadSchema = new Schema<IThread, ThreadModel>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    type: {
      type: Number,
      required: true,
      enum: [10, 11, 12],
    },
    guild_id: {
      type: String,
      required: true,
    },
    parent_id: {
      type: String,
      required: true,
    },
    owner_id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 100,
    },
    last_message_id: {
      type: String,
      default: null,
    },
    message_count: {
      type: Number,
      default: 0,
      min: 0,
    },
    member_count: {
      type: Number,
      default: 1,
      min: 0,
      max: 50,
    },
    rate_limit_per_user: {
      type: Number,
      default: 0,
      min: 0,
      max: 21600,
    },
    thread_metadata: {
      type: threadMetadataSchema,
      required: true,
    },
    total_message_sent: {
      type: Number,
      default: 0,
      min: 0,
    },
    flags: {
      type: Number,
      default: 0,
    },
    applied_tags: {
      type: [String],
      default: [],
    },
    nsfw: {
      type: Boolean,
      default: false,
    },
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

threadSchema.method('softDelete', async function softDelete() {
  this.deletedAt = new Date();
  await this.save();
});

// Plugins
threadSchema.plugin(toJSON);
threadSchema.plugin(paginate);

export default threadSchema;
