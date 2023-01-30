import { Snowflake } from 'discord.js';
import { Document } from 'mongoose';

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
    isDisconnected: boolean,
    isInProgress: boolean,


}

export interface IGuildUpdateBody {
    selectedChannels?: [
        {
            channelId: Snowflake,
            channelName?: string
        }
    ],
    period?: Date,
    isDisconnected?: boolean,
    isInProgress?: boolean
}

export interface IGuildModel extends IGuild, Document { }
