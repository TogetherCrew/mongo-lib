import { type Document, Schema } from 'mongoose';

import { type IUser, type UserModel } from '../../interfaces';
import { Community } from '../index';
import { paginate, toJSON } from './plugins';
import { PlatformNames } from '../../config/enums';

const userSchema = new Schema<IUser, UserModel>(
  {
    identities: [
      {
        provider: {
          type: String,
          enum: Object.values(PlatformNames),
          required: true,
        },
        id: {
          type: String,
          required: true,
        },
      },
    ],
    communities: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Community',
      },
    ],
    tcaAt: {
      type: Date,
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
