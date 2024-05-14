import { Schema } from 'mongoose';
import { toJSON, paginate } from './plugins';
import { type IModule, type ModuleModel } from '../../interfaces';
import { PlatformNames, ModuleNames } from '../../config/enums';

const moduleSchema = new Schema<IModule, ModuleModel>(
  {
    name: {
      type: String,
      required: true,
      enum: Object.values(ModuleNames),
    },
    community: {
      type: Schema.Types.ObjectId,
      ref: 'Community',
      required: true,
    },
    options: {
      platforms: [
        {
          platform: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'Platform',
          },
          metadata: {
            type: Schema.Types.Mixed,
          },
          name: {
            type: String,
            required: true,
            enum: Object.values(PlatformNames),
          },
        },
      ],
    },
  },
  { timestamps: true },
);

// Plugins
moduleSchema.plugin(toJSON);
moduleSchema.plugin(paginate);

export default moduleSchema;
