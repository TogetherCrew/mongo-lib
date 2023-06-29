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
});

// Plugins
channelSchema.plugin(toJSON);

export default channelSchema;
