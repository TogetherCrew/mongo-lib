import { Snowflake } from 'discord.js';
import { Model } from 'mongoose';

export interface IAccount {
  accountId: Snowflake;
  account: string;
  roles: Array<string>;
  joinDate: Date;
}

export interface AccountModel extends Model<IAccount> {
  paginate(filter: object, options: object): any;
}
