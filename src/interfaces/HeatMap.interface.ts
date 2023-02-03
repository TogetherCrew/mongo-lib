import { Model } from 'mongoose';

export interface IHeatMap {
    date?: Date,
    channel?: string,
    messages?: Array<number>,
    interactions?: Array<number>,
    emojis?: Array<number>,
}

export interface HeatMapModel extends Model<IHeatMap> {
    paginate(filter: object, options: object): any
}
