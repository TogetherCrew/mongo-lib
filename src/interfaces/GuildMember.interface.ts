import { Snowflake } from 'discord.js';
import { Model } from 'mongoose';

export interface IGuildMember {
  discordId: Snowflake;
  username: string;
  avatar?: string | null;
  roles: Snowflake[];
  joinedAt: Date | null;
  isBot?: boolean;
  discriminator: string;
}

export interface IGuildMemberUpdateBody {
  username?: string;
  avatar?: string | null;
  roles?: Snowflake[];
  discriminator?: string;
  joinedAt?: Date | null;
}

export interface GuildMemberModel extends Model<IGuildMember> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  paginate(filter: object, options: object): any;
}
