import { Schema } from 'mongoose';

import { ModuleNames, PlatformNames } from '../../config/enums';
import { type IModule, type ModuleModel } from '../../interfaces';
import { paginate, toJSON } from './plugins';

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
    activated: {
      type: Boolean,
      required: true,
      default: false,
    },
    options: {
      platforms: [
        {
          platform: {
            type: Schema.Types.ObjectId,
            ref: 'Platform',
            default: null,
          },
          metadata: {
            type: Schema.Types.Mixed,
          },
          name: {
            type: String,
            enum: [...Object.values(PlatformNames), null],
            default: null,
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
