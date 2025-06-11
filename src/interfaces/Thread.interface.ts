import { Snowflake } from 'discord.js';
import { Model } from 'mongoose';

export interface ThreadMetadata {
  archived: boolean;
  auto_archive_duration: number;
  archive_timestamp: string;
  locked: boolean;
  invitable?: boolean;
  create_timestamp?: string;
}

export interface ThreadMember {
  id?: Snowflake;
  user_id?: Snowflake;
  join_timestamp: string;
  flags: number;
  member?: any;
}

export interface DefaultReaction {
  emoji_id?: Snowflake | null;
  emoji_name?: string | null;
}

export interface ForumTag {
  id: Snowflake;
  name: string;
  moderated: boolean;
  emoji_id?: Snowflake | null;
  emoji_name?: string | null;
}

export interface BaseThread {
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
  thread_metadata: ThreadMetadata;
  total_message_sent?: number;
  flags?: number;
  applied_tags?: Snowflake[];
  nsfw?: boolean;
  member?: ThreadMember;
  default_auto_archive_duration?: number;
  permissions?: string;
  available_tags?: ForumTag[];
  default_reaction_emoji?: DefaultReaction;
  default_thread_rate_limit_per_user?: number;
  default_sort_order?: number | null;
  default_forum_layout?: number;
}

export interface ThreadCreateEvent extends BaseThread {
  newly_created?: boolean;
}

export interface ThreadUpdateEvent extends BaseThread {}

export interface ThreadDeleteEvent {
  id: Snowflake;
  guild_id: Snowflake;
  parent_id: Snowflake;
  type: 10 | 11 | 12;
}

export interface ThreadListSyncEvent {
  guild_id: Snowflake;
  channel_ids?: Snowflake[];
  threads: BaseThread[];
  members: ThreadMember[];
}

export interface ThreadMemberUpdateEvent extends ThreadMember {
  guild_id: Snowflake;
}

export interface ThreadMembersUpdateEvent {
  id: Snowflake;
  guild_id: Snowflake;
  member_count: number;
  added_members?: ThreadMember[];
  removed_member_ids?: Snowflake[];
}

export interface IThread extends BaseThread {}

export interface ThreadChannel extends BaseThread {
  applied_tags: Snowflake[];
}

export interface ThreadUpdateBody {
  name?: string;
  archived?: boolean;
  auto_archive_duration?: number;
  locked?: boolean;
  invitable?: boolean;
  rate_limit_per_user?: number;
  flags?: number;
  applied_tags?: Snowflake[];
  nsfw?: boolean;
  default_auto_archive_duration?: number;
  permissions?: string;
  available_tags?: ForumTag[];
  default_reaction_emoji?: DefaultReaction;
  default_thread_rate_limit_per_user?: number;
  default_sort_order?: number | null;
  default_forum_layout?: number;
}

export interface ThreadModel extends Model<IThread> {
  paginate: (filter: object, options: object) => any;
}
