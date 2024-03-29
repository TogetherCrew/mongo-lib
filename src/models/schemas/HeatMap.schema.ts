import { Schema } from 'mongoose';
import { toJSON, paginate } from './plugins';
import { type IHeatMap } from '../../interfaces';

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
  replied_per_acc: [
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
  mentioner_per_acc: [
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
  reacted_per_acc: [
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
  account_name: String,
});

// Plugins
heatMapSchema.plugin(toJSON);
heatMapSchema.plugin(paginate);

export default heatMapSchema;
