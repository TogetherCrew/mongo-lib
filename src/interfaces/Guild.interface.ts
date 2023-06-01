import { type Snowflake } from 'discord.js';
import { type Model } from 'mongoose';

export interface IGuild {
  guildId: Snowflake;
  user: Snowflake;
  name: string;
  selectedChannels?: [
    {
      channelId: Snowflake;
      channelName?: string;
    },
  ];
  period?: Date;
  connectedAt: Date;
  isDisconnected: boolean;
  isInProgress: boolean;
  icon: string | null;
  window?: number[];
  action?: number[];
}

export interface IGuildUpdateBody {
  selectedChannels?: [
    {
      channelId: Snowflake;
      channelName?: string;
    },
  ];
  period?: Date;
  isDisconnected?: boolean;
  isInProgress?: boolean;
  icon?: string | null;
}

export interface GuildModel extends Model<IGuild> {
  paginate: (filter: object, options: object) => any;
}
