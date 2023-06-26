import { type Snowflake } from 'discord.js';
import { type Model } from 'mongoose';

export interface IChannel {
  id: Snowflake;
  name?: string | null;
  parent_id?: string | null;
}

export interface IChannelUpdateBody {
  name?: string | null;
  parent_id?: string | null;
}

export interface ChannelModel extends Model<IChannel> {
  paginate: (filter: object, options: object) => any;
}
