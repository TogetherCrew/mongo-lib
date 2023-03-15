import { Schema } from 'mongoose';
import { toJSON } from './plugins';
import { IHeatMap } from '../../interfaces/HeatMap.interface';

const heatMapSchema = new Schema<IHeatMap>({
  date: {
    type: String,
  },
  thr_messages: [
    {
      type: Number,
    },
  ],
  lone_messages: [
    {
      type: Number,
    },
  ],
  replier: [
    {
      type: Number,
    },
  ],
  replier_accounts: [
    {
      account: {
        type: String,
      },
      count: {
        type: Number,
      },
    },
  ],

  replied: [
    {
      type: Number,
    },
  ],
  mentioner: [
    {
      type: Number,
    },
  ],
  mentioner_accounts: [
    {
      account: {
        type: String,
      },
      count: {
        type: Number,
      },
    },
  ],
  mentioned: [
    {
      type: Number,
    },
  ],
  reacter: [
    {
      type: Number,
    },
  ],
  reacter_accounts: [
    {
      account: {
        type: String,
      },
      count: {
        type: Number,
      },
    },
  ],
  reacted: [
    {
      type: Number,
    },
  ],
  channelId: {
    type: String,
  },
  account: String,
});

// Plugins
heatMapSchema.plugin(toJSON);

export default heatMapSchema;
