import { Schema } from 'mongoose';
import { toJSON } from './plugins';
import { IHeatMap } from '../../interfaces/HeatMap.interface';

const heatMapSchema = new Schema<IHeatMap>({
    date: {
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

export default heatMapSchema;
