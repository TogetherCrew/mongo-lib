import { Document, Schema } from 'mongoose';

import { IUser, UserModel } from '../../interfaces';
import { Community } from '../index';
import { paginate, toJSON } from './plugins';

const userSchema = new Schema<IUser, UserModel>(
  {
    discordId: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
    },
    communities: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Community',
      },
    ],
    tcaAt: {
      type: Date,
    },
    unverifiedTelegramUsername: {
      type: String,
    },
  },
  { timestamps: true },
);

userSchema.pre('remove', async function (this: Document) {
  const userId = this._id;
  await Community.updateMany({ users: userId }, { $pull: { users: userId } });
});

// Plugins
userSchema.plugin(toJSON);
userSchema.plugin(paginate);

export default userSchema;
