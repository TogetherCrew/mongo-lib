import { Schema, model } from 'mongoose';
import { toJSON } from './plugins';
import { IHeatMap, IHeatMapModel } from '../interfaces/HeatMap.interface';

const heatMapSchema = new Schema<IHeatMap>({
    data: {
        type: String
    },
    channel: {
        type: String
    },
    messages: [{
        type: Number
    }],
    interactions: [{
        type: Number
    }],
    emojis: [{
        type: Number
    }]
});

// Plugins
heatMapSchema.plugin(toJSON);

export default model<IHeatMapModel>('HeatMap', heatMapSchema);