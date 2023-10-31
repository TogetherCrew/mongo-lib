import { Schema, type Document } from 'mongoose';
import { toJSON, paginate } from './plugins';
import { type ICommunity, type CommunityModel } from '../../interfaces';
import { User, Platform } from '../index';

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
        required: true,
      },
    ],
    platforms: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Platform',
      },
    ],
    tcaAt: {
      type: Date,
    },
  },

  { timestamps: true },
);

// Plugins
communitySchema.plugin(toJSON);
communitySchema.plugin(paginate);

communitySchema.pre('remove', async function (this: Document) {
  const communityId = this._id;

  await User.updateMany({ communities: communityId }, { $pull: { communities: communityId } });
  await Platform.deleteMany({ community: communityId });
});
export default communitySchema;
