import { type Snowflake } from 'discord.js';
import { type Model } from 'mongoose';

export interface IOverwrite {
  id: Snowflake; // ID of the role or user this overwrite applies to
  type: 0 | 1; // Specifies if this overwrite applies to a role(0) or a member(1)
  allow: string; // Permissions allowed by this overwrite
  deny: string; // Permissions denied by this overwrite
}

export interface IChannel {
  channelId: Snowflake;
  name?: string | null;
  parentId?: string | null;
  permissionOverwrites?: IOverwrite[];
}

export interface IChannelUpdateBody {
  name?: string | null;
  parentId?: string | null;
  permissionOverwrites?: IOverwrite[];
}

export interface ChannelModel extends Model<IChannel> {
  paginate: (filter: object, options: object) => any;
}
