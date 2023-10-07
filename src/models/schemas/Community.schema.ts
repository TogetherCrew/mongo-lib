import { Schema } from 'mongoose';
import { toJSON, paginate } from './plugins';
import { type ICommunity, type CommunityModel } from '../../interfaces';

const communitySchema = new Schema<ICommunity, CommunityModel>(
  {
    name: {
      type: String,
      required: true,
      maxlength: 50,
    },
    avatarURL: {
      type: String,
    },
    users: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true, // A community must have at least one user
      },
    ],
  },

  { timestamps: true },
);

// Plugins
communitySchema.plugin(toJSON);
communitySchema.plugin(paginate);

export default communitySchema;
