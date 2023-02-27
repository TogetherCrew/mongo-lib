import { Schema } from 'mongoose';
import { toJSON } from './plugins';
import { IHeatMap } from '../../interfaces/HeatMap.interface';

const heatMapSchema = new Schema<IHeatMap>({
    date: {
        type: String
    },
    channelId: {
        type: String
    },
    thr_messages: [{
        type: Number
    }],
    lone_messages: [{
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
    reacter: [{
        type: Number
    }],
    reacted: [{
        type: Number
    }],
    account_name: String
});

// Plugins
heatMapSchema.plugin(toJSON);

export default heatMapSchema;
