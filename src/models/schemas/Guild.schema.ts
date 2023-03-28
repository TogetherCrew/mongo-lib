import { Schema } from 'mongoose';
import { paginate, toJSON } from './plugins';
import { IGuild, GuildModel } from '../../interfaces/Guild.interface';

const guildSchema = new Schema<IGuild, GuildModel>({
  guildId: {
    type: String,
    required: true,
    unique: true,
  },
  user: {
    type: String,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
  },
  selectedChannels: [
    {
      channelId: {
        type: String,
      },
      channelName: {
        type: String,
      },
    },
  ],
  period: {
    type: Date,
  },
  connectedAt: {
    type: Date,
    default: new Date(),
  },
  isInProgress: {
    type: Boolean,
    default: true,
  },
  isDisconnected: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
  },
  window: [
    {
      type: Number,
      default: 7,
    },
    {
      type: Number,
      default: 1,
    },
  ],
  action: [
    {
      type: Number,
      default: 1,
    },
    {
      type: Number,
      default: 1,
    },
    {
      type: Number,
      default: 1,
    },
    {
      type: Number,
      default: 4,
    },
    {
      type: Number,
      default: 3,
    },
    {
      type: Number,
      default: 5,
    },
    {
      type: Number,
      default: 5,
    },
    {
      type: Number,
      default: 4,
    },
    {
      type: Number,
      default: 3,
    },
    {
      type: Number,
      default: 3,
    },
    {
      type: Number,
      default: 2,
    },
  ],
});

// Plugins
guildSchema.plugin(toJSON);
guildSchema.plugin(paginate);

export default guildSchema;
