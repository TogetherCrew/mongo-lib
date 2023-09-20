import { type Model } from 'mongoose';
import { type Snowflake } from 'discord.js';

export interface IRawInfo {
  type: number;
  author: Snowflake;
  content: string;
  createdDate: Date;
  user_mentions: Snowflake[];
  role_mentions: Snowflake[];
  reactions: Snowflake[];
  replied_user: Snowflake | null | undefined;
  messageId: Snowflake;
  channelId: Snowflake;
  channelName: string | null;
  threadId: Snowflake | null;
  threadName: string | null;
  isGeneratedByWebhook?: boolean;
}

export interface IRawInfoUpdateBody {
  channelId?: Snowflake;
  channelName?: string | null;
  threadId?: Snowflake | null;
  threadName?: string | null;
  content?: string;
  isGeneratedByWebhook?: boolean;
}

export interface RawInfoModel extends Model<IRawInfo> {
  paginate: (filter: object, options: object) => any;
}
