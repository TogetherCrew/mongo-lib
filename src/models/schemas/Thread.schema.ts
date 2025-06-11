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

const threadMemberSchema = new Schema(
  {
    id: {
      type: String,
      default: null,
    },
    user_id: {
      type: String,
      default: null,
    },
    join_timestamp: {
      type: String,
      required: true,
    },
    flags: {
      type: Number,
      required: true,
      default: 0,
    },
    member: {
      type: Schema.Types.Mixed,
      default: null,
    },
  },
  { _id: false },
);

const defaultReactionSchema = new Schema(
  {
    emoji_id: {
      type: String,
      default: null,
    },
    emoji_name: {
      type: String,
      default: null,
    },
  },
  { _id: false },
);

const forumTagSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      minlength: 0,
      maxlength: 20,
    },
    moderated: {
      type: Boolean,
      required: true,
      default: false,
    },
    emoji_id: {
      type: String,
      default: null,
    },
    emoji_name: {
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
    member: {
      type: threadMemberSchema,
      default: null,
    },
    default_auto_archive_duration: {
      type: Number,
      enum: [60, 1440, 4320, 10080],
      default: null,
    },
    permissions: {
      type: String,
      default: null,
    },
    available_tags: {
      type: [forumTagSchema],
      default: [],
    },
    default_reaction_emoji: {
      type: defaultReactionSchema,
      default: null,
    },
    default_thread_rate_limit_per_user: {
      type: Number,
      default: null,
      min: 0,
      max: 21600,
    },
    default_sort_order: {
      type: Number,
      enum: [0, 1],
      default: null,
    },
    default_forum_layout: {
      type: Number,
      enum: [0, 1, 2],
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

// Plugins
threadSchema.plugin(toJSON);
threadSchema.plugin(paginate);

export default threadSchema;
