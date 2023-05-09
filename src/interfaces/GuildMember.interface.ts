import { Snowflake } from 'discord.js';
import { Model } from 'mongoose';

export interface IGuildMember {
  accountId: Snowflake;
  account: string;
  roles: Array<string>;
  joinDate: Date;
}

export interface GuildMemberModel extends Model<IGuildMember> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  paginate(filter: object, options: object): any;
}
