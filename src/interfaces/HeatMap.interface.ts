import { type Model } from 'mongoose';
import { type Snowflake } from 'discord.js';

export interface IHeatMap {
  date?: string;
  thr_messages?: number[];
  lone_messages?: number[];
  replier?: number[];
  replied_per_acc: Array<{ account: string; count: number }>;
  replied?: number[];
  mentioner?: number[];
  mentioner_per_acc: Array<{ account: string; count: number }>;
  mentioned?: number[];
  reacter?: number[];
  reacted_per_acc: Array<{ account: string; count: number }>;
  reacted?: number[];
  channelId: Snowflake;
  account_name?: string;
}

export interface HeatMapModel extends Model<IHeatMap> {
  paginate: (filter: object, options: object) => any;
}
