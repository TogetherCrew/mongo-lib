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
    isDisconnected: {
        type: Boolean,
        default: false
    },
    icon: {
        type: String,
    },
    window: {
        periodDiration: {
            type: Number,
            default: 7
        },
        periodStep: {
            type: Number,
            default: 1
        }
    },
    action: {
        activeInteractions: {
            type: Number,
            default: 1
        },
        activeAccounts: {
            type: Number,
            default: 1
        },
        connectedInteractions: {
            type: Number,
            default: 5
        },
        connectedAccounts: {
            type: Number,
            default: 5
        },
    }
});


// Plugins
guildSchema.plugin(toJSON);
guildSchema.plugin(paginate);

export default guildSchema;
