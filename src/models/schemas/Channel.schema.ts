import { Schema } from 'mongoose';
import { toJSON } from './plugins';
import { IChannel, ChannelModel } from '../../interfaces/Channel.interface';

const channelSchema = new Schema<IChannel, ChannelModel>({
    id: {
        type: String,
        unique: true,
    },
    name: {
        type: String,
    },
    parent_id: {
        type: String,
    }
});

// Plugins
channelSchema.plugin(toJSON);

export default channelSchema;
