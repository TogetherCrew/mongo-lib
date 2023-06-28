import { Schema } from 'mongoose';
import { paginate, toJSON } from './plugins';
import { IGuild, GuildModel } from '../../interfaces';

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
  window: {
    type: Array<number>,
    default: [7, 1],
    validate: {
      validator: function (arr: Array<number>) {
        return arr.length === 2;
      },
      message: 'Window must be an array with exactly 2 numbers',
    },
  },
  action: {
    type: Array<number>,
    default: [1, 1, 1, 4, 3, 5, 5, 4, 3, 3, 2],
    validate: {
      validator: function (arr: Array<number>) {
        return arr.length === 13;
      },
      message: 'Action must be an array with exactly 11 numbers',
    },
  },
});

// Plugins
guildSchema.plugin(toJSON);
guildSchema.plugin(paginate);

export default guildSchema;
