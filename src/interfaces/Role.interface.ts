import { type Snowflake } from 'discord.js';
import { type Model } from 'mongoose';

export interface IRole {
  roleId: Snowflake;
  name: string;
  color: number;
  deletedAt?: Date | null
}

export interface IRoleUpdateBody {
  name?: string;
  color?: number;
  deletedAt?: Date | null
}

export interface IRoleMethods {
  softDelete: () => void;
}

export interface RoleModel extends Model<IRole, Record<string, unknown>, IRoleMethods> {
  paginate: (filter: object, options: object) => any;
}
