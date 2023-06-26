import { Model } from 'mongoose';
import { Snowflake } from 'discord.js';
export interface IRawInfo {
    type?: string;
    author?: Snowflake;
    content?: string;
    datetime?: string;
    user_mentions?: Array<string>;
    role_mentions?: Array<string>;
    reactions?: Array<string>;
    replied_user?: string;
    channelId?: string;
    messageId: string;
    threadId: string;
    thread?: string;
}
export interface RawInfoModel extends Model<IRawInfo> {
    paginate(filter: object, options: object): any;
}
