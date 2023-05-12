import { Snowflake } from 'discord.js';
import { Model } from 'mongoose';
import { IUser } from './User.interface';

export interface IGuildMember {
  user?: IUser;
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
