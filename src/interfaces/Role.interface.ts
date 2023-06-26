import { Snowflake } from 'discord.js';
import { type Model } from 'mongoose';

export interface IRole {
    id: Snowflake;
    name: string;
    color: number;
}

export interface IRoleUpdateBody {
    name?: string;
    color?: number;
}

export interface RoleModel extends Model<IRole> {
    paginate: (filter: object, options: object) => any;
}
