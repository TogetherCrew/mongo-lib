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
}

export interface IGuildMemberUpdateBody {
  username?: string;
  avatar?: string | null;
  roles?: Snowflake[];
  discriminator?: string;
  joinedAt?: Date | null;
  permissions?: string;
}

export interface GuildMemberModel extends Model<IGuildMember> {
  paginate: (filter: object, options: object) => any;
}
