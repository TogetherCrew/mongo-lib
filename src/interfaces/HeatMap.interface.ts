import { Model } from 'mongoose';
import { Snowflake } from 'discord.js';

export interface IHeatMap {
    date?: Date,
    channelId?: Snowflake,
    thr_messages?: Array<number>,
    lone_messages?: Array<number>,
    replier?: Array<number>,
    replied?: Array<number>,
    mentioner?: Array<number>,
    mentioned?: Array<number>,
    reacter?: Array<number>,
    reacted?: Array<number>,
    account_name?: string
}

export interface HeatMapModel extends Model<IHeatMap> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    paginate(filter: object, options: object): any
}
