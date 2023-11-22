import { Schema, type Document } from 'mongoose';
import { toJSON, paginate } from './plugins';
import { type IPlatform, type PlatformModel } from '../../interfaces';
import { Community } from '../index';

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
    connectedAt: {
      type: Date,
      default: new Date(),
    },
    isInProgress: {
      type: Boolean,
      default: true,
    },
  },

  { timestamps: true },
);

// Plugins
platformSchema.plugin(toJSON);
platformSchema.plugin(paginate);

platformSchema.pre('remove', async function (this: Document) {
  const platformId = this._id;
  await Community.updateOne({ platforms: platformId }, { $pull: { platforms: platformId } });
});

export default platformSchema;
