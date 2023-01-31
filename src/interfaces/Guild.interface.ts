import { Snowflake } from 'discord.js';
import { Model } from 'mongoose';

export interface IGuild {
    guildId: Snowflake,
    user: Snowflake,
    name: string,
    selectedChannels?: [
        {
            channelId: Snowflake,
            channelName?: string
        }
    ],
    period?: Date,
    connectedAt: Date,
    isDisconneted: boolean,
    isInProgress: boolean,
}


export interface GuildModel extends Model<IGuild> {
    paginate(filter: object, options: object): any
}

export interface IGuildUpdateBody {
    selectedChannels?: [
        {
            channelId: Snowflake,
            channelName?: string
        }
    ],
    period?: Date,
    isDisconneted?: boolean,
    isInProgress?: boolean
}
