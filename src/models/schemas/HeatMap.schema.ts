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
    lone_messages: [{
        type: Number
    }],
    thr_messages: [{
        type: Number
    }],
    replier: [{
        type: Number
    }],
    replied: [{
        type: Number
    }],
    mentioner: [{
        type: Number
    }],
    mentioned: [{
        type: Number
    }],
    rep_mentioner: [{
        type: Number
    }],
    rep_mentioned: [{
        type: Number
    }],
    reacter: [{
        type: Number
    }],
    reacted: [{
        type: Number
    }],
    acc_names: {
        type: String
    },
});

// Plugins
heatMapSchema.plugin(toJSON);

export default heatMapSchema;
