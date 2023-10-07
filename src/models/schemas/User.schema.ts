import { Schema, type Document } from 'mongoose';
import validator from 'validator';
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
      validate(value: string) {
        if (!validator.isEmail(value)) throw new Error('Email Address is not valid');
      },
      unique: true,
    },
    communities: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Community',
      },
    ],
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
