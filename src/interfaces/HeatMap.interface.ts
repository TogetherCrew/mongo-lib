import { Model } from 'mongoose';

export interface IHeatMap {
    date?: string,
    channel?: string,
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
