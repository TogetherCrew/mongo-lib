import { type Snowflake } from 'discord.js';
import { type Model, type Types } from 'mongoose';

export interface IUser {
  discordId: Snowflake;
  email?: string;
  communities?: Types.ObjectId[];
  tcaAt?: Date;
}

export interface IUserUpdateBody {
  email?: string;
  communities?: Types.ObjectId[];
  tcaAt?: Date;
}

export interface UserModel extends Model<IUser> {
  paginate: (filter: object, options: object) => any;
}
