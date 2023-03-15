import { Schema } from 'mongoose';
import { toJSON } from './plugins';
import { IChannels } from '../../interfaces/Channels.interface';

const channelsSchema = new Schema<IChannels>({
  channel: {
    type: String,
  },
  channelId: {
    type: String,
  },
  last_update: {
    type: Date,
  },
});

// Plugins
channelsSchema.plugin(toJSON);

export default channelsSchema;
