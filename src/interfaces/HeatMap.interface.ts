import { Model } from 'mongoose';
import { Snowflake } from 'discord.js';

export interface IHeatMap {
  date?: string;
  thr_messages?: Array<number>;
  lone_messages?: Array<number>;
  replier?: Array<number>;
  replier_accounts: Array<{ account: string; count: number }>;
  replied?: Array<number>;
  mentioner?: Array<number>;
  mentioner_accounts: Array<{ account: string; count: number }>;
  mentioned?: Array<number>;
  reacter?: Array<number>;
  reacter_accounts: Array<{ account: string; count: number }>;
  reacted?: Array<number>;
  channelId: Snowflake;
  account?: string;
}

export interface HeatMapModel extends Model<IHeatMap> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  paginate(filter: object, options: object): any;
}
