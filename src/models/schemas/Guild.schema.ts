import { Schema } from 'mongoose';
import { paginate, toJSON } from './plugins';
import { IGuild, GuildModel } from '../../interfaces/Guild.interface';

const guildSchema = new Schema<IGuild, GuildModel>({
    guildId: {
        type: String,
        required: true,
        unique: true
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
        }
    ],
    period: {
        type: Date,
    },
    connectedAt: {
        type: Date,
        default: new Date()
    },
    isInProgress: {
        type: Boolean,
        default: true
    },
    isDisconneted: {
        type: Boolean,
        default: false
    }
});


// Plugins
guildSchema.plugin(toJSON);
guildSchema.plugin(paginate);

export default guildSchema;
