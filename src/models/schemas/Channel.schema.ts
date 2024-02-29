import { Schema } from 'mongoose';
import { toJSON, paginate } from './plugins';
import { type IChannel, type ChannelModel } from '../../interfaces';

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
      id: String, // or use mongoose.Schema.Types.ObjectId if Snowflake is an ObjectId
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
  this.deletedAt = Date.now();
  await this.save();
});

// Plugins
channelSchema.plugin(toJSON);
channelSchema.plugin(paginate);

export default channelSchema;
