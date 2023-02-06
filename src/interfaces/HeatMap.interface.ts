import { Model } from 'mongoose';

export interface IHeatMap {
    date?: Date,
    channel?: string,
    messages?: Array<number>,
    interactions?: Array<number>,
    emojis?: Array<number>,
}

export interface HeatMapModel extends Model<IHeatMap> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    paginate(filter: object, options: object): any
}
