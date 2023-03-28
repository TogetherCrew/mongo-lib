import { Snowflake } from 'discord.js';
import { Model } from 'mongoose';

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
  window?: Array<number>;
  action?: Array<number>;
}

export interface IGuildConfig {
  guildId?: Snowflake;
  isDisconnected: boolean;
}

export interface GuildModel extends Model<IGuild> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  paginate(filter: object, options: object): any;
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
}
