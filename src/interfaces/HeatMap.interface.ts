import { Model } from 'mongoose';

export interface IHeatMap {
    date?: Date,
    channel?: string,
    lone_messages?: Array<number>,
    thr_messages?: Array<number>,
    replier?: Array<number>,
    replied?: Array<number>,
    mentioner?: Array<number>,
    mentioned?: Array<number>,
    rep_mentioner?: Array<number>,
    rep_mentioned?: Array<number>,
    reacter?: Array<number>,
    reacted?: Array<number>,
    acc_names?: string,
}

export interface HeatMapModel extends Model<IHeatMap> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    paginate(filter: object, options: object): any
}
