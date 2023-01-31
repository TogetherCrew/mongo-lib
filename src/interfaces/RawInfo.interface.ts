import { Model } from 'mongoose';
import { Snowflake } from 'discord.js';

export interface IRawInfo {
    type?: string,
    author?: string,
    content?: string,
    user_Mentions?: Array<string>,
    roles_Mentions?: Array<string>,
    reactions?: Array<string>,
    replied_User?: string,
    reference_Message?: number,
    created_at?: Date,
    channelId?: Snowflake,
    messageId?: Snowflake
}

export interface RawInfoModel extends Model<IRawInfo> {
    paginate(filter: object, options: object): any
}