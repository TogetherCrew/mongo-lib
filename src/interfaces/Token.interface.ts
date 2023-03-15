import { Snowflake } from 'discord.js';
import { Model } from 'mongoose';

export interface IToken {
  token: string;
  user: Snowflake;
  type: string;
  expires: Date;
  blacklisted?: boolean;
}

export interface TokenModel extends Model<IToken> {
  paginate(filter: object, options: object): any;
}
