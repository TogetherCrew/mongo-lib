import { type Snowflake } from 'discord.js';
import { type IUser } from './User.interface';

export interface IDiscordUser {
  id: Snowflake;
  username: string;
  discriminator: string;
  avatar: string | null;
  bot?: boolean;
  system?: boolean;
  mfa_enabled?: boolean;
  banner?: string | null;
  accent_color?: number | null;
  locale?: string;
  verified?: boolean;
  email?: string | null;
  flags?: number;
  premium_type?: number;
  public_flags?: number;
}

export interface IDiscordGuild extends IDiscordCore {
  id: Snowflake;
  name: string;
  icon: string | null;
}

export interface IDiscordChannel extends IDiscordCore {
  id: Snowflake;
  type: number;
  guild_id?: Snowflake;
  position?: number;
  permission_overwrites?: any[];
  name?: string | null;
  topic?: string | null;
  nsfw?: boolean;
  last_message_id?: Snowflake | null;
  bitrate?: number;
  user_limit?: number;
}

export interface IDiscordOathBotCallback {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  guild: IDiscordGuild;
}

export interface IDiscordGuildMember {
  user?: IUser;
  nick?: string;
  avatar?: string;
  roles: Snowflake[];
  joined_at: string;
  premium_since?: string;
  deaf: boolean;
  mute: boolean;
  flags: number;
  pending?: boolean;
  permissions?: string;
  communication_disabled_until?: string;
}

interface IDiscordCore {
  icon_hash?: string | null;
  splash: string | null;
  discovery_splash: string | null;
  owner?: boolean;
  owner_id: Snowflake;
  permissions?: string;
  region?: string | null;
  afk_channel_id: Snowflake | null;
  afk_timeout: number;
  widget_enabled?: boolean;
  widget_channel_id?: Snowflake | null;
  verification_level: number;
  default_message_notifications: number;
  explicit_content_filter: number;
  roles: any[];
  emojis: any[];
  features: any[];
  application_id: Snowflake | null;
  system_channel_id: Snowflake | null;
  system_channel_flags: number;
  rules_channel_id: Snowflake | null;
  max_presences?: number | null;
  max_members?: number;
  vanity_url_code: string | null;
  description: string | null;
  banner: string | null;
  premium_tier: number;
  premium_subscription_count?: number;
  preferred_locale: string;
  public_updates_channel_id: Snowflake | null;
  max_video_channel_users?: number;
  approximate_member_count?: number;
  approximate_presence_count?: number;
  welcome_screen?: Record<string, unknown>;
  nsfw_level: number;
  stickers?: any[];
  premium_progress_bar_enabled: boolean;
}
