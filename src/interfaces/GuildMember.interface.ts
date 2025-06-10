import { Snowflake } from 'discord.js';
import { Model } from 'mongoose';

export interface IGuildMember {
  discordId: Snowflake;
  username: string;
  avatar?: string | null;
  roles: Snowflake[];
  joinedAt: Date | null;
  isBot?: boolean | null;
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
  isBot?: boolean | null;
}

export interface GuildMemberPayload {
  guildId: Snowflake;
  userId: Snowflake;
  joinedTimestamp: number | null;
  premiumSinceTimestamp: number | null;
  communicationDisabledUntilTimestamp: number | null;
  nickname: string | null;
  displayName: string;
  avatar: string | null;
  banner: string | null;
  avatarURL: string | null;
  bannerURL: string | null;
  displayAvatarURL: string | null;
  roles: Snowflake[];
  pending: boolean;
  flags: number;
}

export interface IGuildMemberMethods {
  softDelete: () => Promise<void>;
}

export interface GuildMemberModel extends Model<IGuildMember, Record<string, unknown>, IGuildMemberMethods> {
  paginate: (filter: object, options: object) => any;
}
