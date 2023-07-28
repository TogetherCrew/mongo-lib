import { type Snowflake } from 'discord.js';
import { type Model } from 'mongoose';

export interface IGuildMember {
  discordId: Snowflake;
  username: string;
  avatar?: string | null;
  roles: Snowflake[];
  joinedAt: Date | null;
  isBot?: boolean;
  discriminator: string;
  permissions?: string;
  deletedAt?: Date | null;
  globalName?: string | null;
  nickname?: string | null;
}

export interface IGuildMemberUpdateBody {
  username?: string;
  avatar?: string | null;
  roles?: Snowflake[];
  discriminator?: string;
  joinedAt?: Date | null;
  permissions?: string;
  deletedAt?: Date | null;
  globalName?: string | null;
  nickname?: string | null;
}

export interface IGuildMemberMethods {
  softDelete: () => void;
}

export interface GuildMemberModel extends Model<IGuildMember, Record<string, unknown>, IGuildMemberMethods> {
  paginate: (filter: object, options: object) => any;
}
