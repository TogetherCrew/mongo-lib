import { Snowflake } from 'discord.js';
import { Model } from 'mongoose';

export interface IGuildMember {
  discordId?: Snowflake;
  nick?: string;
  avatar?: string;
  roles: Snowflake[];
  joined_at: string;
}

export interface IGuildMemberUpdateBody {
  user?: IUser;
  nick?: string;
  avatar?: string;
  roles?: Snowflake[];
  joined_at?: string;
}

export interface GuildMemberModel extends Model<IGuildMember> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  paginate(filter: object, options: object): any;
}

export interface IGuildMemberUpdateBody {
  nick?: string;
  avatar?: string;
  roles?: Snowflake[];
}
