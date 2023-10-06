import { Schema } from 'mongoose';
import { toJSON, paginate } from './plugins';
import { type IPlatform, type PlatformModel } from '../../interfaces';

const platformSchema = new Schema<IPlatform, PlatformModel>(
  {
    name: {
      type: String,
      required: true,
    },
    metadata: {
      type: Schema.Types.Mixed,
    },
    community: {
      type: Schema.Types.ObjectId,
      ref: 'Community',
      required: true,
    },
    disconnectedAt: {
      type: Date,
      default: null,
    },
  },

  { timestamps: true },
);

// Plugins
platformSchema.plugin(toJSON);
platformSchema.plugin(paginate);

export default platformSchema;
