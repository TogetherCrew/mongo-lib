import { Schema } from 'mongoose';
import { toJSON } from './plugins';
import { IChannel, ChannelModel } from '../../interfaces';

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
});

// Plugins
channelSchema.plugin(toJSON);

export default channelSchema;
