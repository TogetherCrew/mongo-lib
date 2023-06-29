import { type Snowflake } from 'discord.js';
import { type Model } from 'mongoose';

export interface IChannel {
  channelId: Snowflake;
  name?: string | null;
  parentId?: string | null;
}

export interface IChannelUpdateBody {
  name?: string | null;
  parentId?: string | null;
}

export interface ChannelModel extends Model<IChannel> {
  paginate: (filter: object, options: object) => any;
}
