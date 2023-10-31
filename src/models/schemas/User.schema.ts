import { Schema, type Document } from 'mongoose';
import { toJSON, paginate } from './plugins';
import { Community } from '../index';
import { type IUser, type UserModel } from '../../interfaces';

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
