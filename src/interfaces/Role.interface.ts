import { Snowflake } from 'discord.js';
import { Model } from 'mongoose';

export interface IRole {
  roleId: Snowflake;
  name: string;
  color: number;
  deletedAt?: Date | null;
}

export interface IRoleUpdateBody {
  name?: string;
  color?: number;
  deletedAt?: Date | null;
}

export interface IRoleMethods {
  softDelete: () => void;
}

export interface RolePayload {
  guild: Snowflake;
  id: Snowflake;
  name: string;
  color: number;
  icon: string | null;
  unicodeEmoji: string | null;
  hoist: boolean;
  mentionable: boolean;
  managed: boolean;
  permissions: string;
  rawPosition: number;
  tags: unknown | null;
  createdTimestamp: number;
}

export interface RoleModel extends Model<IRole, Record<string, unknown>, IRoleMethods> {
  paginate: (filter: object, options: object) => any;
}
