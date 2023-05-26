import { type Model } from 'mongoose';
import { type Snowflake } from 'discord.js';

export interface IRawInfo {
  type: number,
  author: Snowflake,
  content: string,
  createdDate: Date,
  user_mentions: Array<Snowflake>,
  role_mentions: Array<Snowflake>,
  reactions: Array<Snowflake>,
  replied_user: Snowflake | null | undefined,
  messageId: Snowflake,
  channelId: Snowflake,
  channelName: string | null,
  threadId: Snowflake | null,
  threadName: string | null,
}

export interface IRawInfoUpdateBody {
  channelId?: Snowflake,
  channelName?: string | null,
  threadId?: Snowflake | null,
  threadName?: string | null,
  content?: string,
}

export interface RawInfoModel extends Model<IRawInfo> {
  paginate: (filter: object, options: object) => any;
}
