import { Model } from 'mongoose';
import { Snowflake } from 'discord.js';

export interface IRawInfo {
  type?: string;
  author?: Snowflake;
  content?: string;
  datetime?: string;
  user_mentions?: Array<Snowflake>;
  role_mentions?: Array<string>;
  reactions?: Array<Snowflake>;
  replied_user?: Snowflake;
  channelId?: string;
  messageId: string;
  threadId: string;
  thread?: string;
}

export interface RawInfoModel extends Model<IRawInfo> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  paginate(filter: object, options: object): any;
}
