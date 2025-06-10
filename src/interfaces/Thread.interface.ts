import { Snowflake } from 'discord.js';
import { Model } from 'mongoose';

export interface IThreadMetadata {
  archived: boolean;
  auto_archive_duration: number;
  archive_timestamp: string;
  locked: boolean;
  invitable?: boolean;
  create_timestamp?: string;
}

export interface IThread {
  id: Snowflake;
  type: 10 | 11 | 12;
  guild_id: Snowflake;
  parent_id: Snowflake;
  owner_id: Snowflake;
  name: string;
  last_message_id?: Snowflake | null;
  message_count?: number;
  member_count?: number;
  rate_limit_per_user?: number;
  thread_metadata: IThreadMetadata;
  total_message_sent?: number;
  flags?: number;
  applied_tags?: Snowflake[];
  nsfw?: boolean;
  deletedAt?: Date | null;
}

export interface IThreadUpdateBody {
  name?: string;
  archived?: boolean;
  auto_archive_duration?: number;
  locked?: boolean;
  invitable?: boolean;
  rate_limit_per_user?: number;
  flags?: number;
  applied_tags?: Snowflake[];
  nsfw?: boolean;
  deletedAt?: Date | null;
}

export interface IThreadMethods {
  softDelete: () => void;
}

export interface ThreadModel extends Model<IThread, Record<string, unknown>, IThreadMethods> {
  paginate: (filter: object, options: object) => any;
}
