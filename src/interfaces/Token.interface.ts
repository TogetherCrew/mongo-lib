import { Snowflake } from 'discord.js';
import { Model } from 'mongoose';

export interface IToken {
  token: string;
  user: Snowflake;
  type: string;
  expires: Date;
  blacklisted?: boolean;
}

export interface ITokenUpdateBody {
  blacklisted?: boolean
}

export interface TokenModel extends Model<IToken> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  paginate(filter: object, options: object): any;
}
