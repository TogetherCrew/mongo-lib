import { type Model } from 'mongoose';
import { type Snowflake } from 'discord.js';

export interface IRawInfo {
  type?: string;
  author?: Snowflake;
  content?: string;
  datetime?: string;
  user_mentions?: Snowflake[];
  role_mentions?: string[];
  reactions?: Snowflake[];
  replied_user?: Snowflake;
  channelId?: string;
  messageId: string;
  threadId: string;
  thread?: string;
}

export interface RawInfoModel extends Model<IRawInfo> {
  paginate: (filter: object, options: object) => any;
}
