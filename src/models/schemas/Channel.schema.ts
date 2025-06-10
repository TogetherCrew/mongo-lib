import { Schema } from 'mongoose';

import { ChannelModel, IChannel } from '../../interfaces';
import { paginate, toJSON } from './plugins';

const channelSchema = new Schema<IChannel, ChannelModel>({
  channelId: {
    type: String,
    unique: true,
  },
  name: {
    type: String,
  },
  parentId: {
    type: String,
  },
  type: {
    type: Number,
  },
  permissionOverwrites: [
    {
      id: String,
      type: {
        type: Number,
        enum: [0, 1],
      },
      allow: String,
      deny: String,
    },
  ],
  deletedAt: {
    type: Date,
    default: null,
  },
});

channelSchema.method('softDelete', async function softDelete() {
  this.deletedAt = new Date();
  await this.save();
});

// Plugins
channelSchema.plugin(toJSON);
channelSchema.plugin(paginate);

export default channelSchema;
