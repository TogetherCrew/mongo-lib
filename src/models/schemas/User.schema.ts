import { Schema } from 'mongoose';
import validator from 'validator';
import { toJSON, paginate } from './plugins';
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
    verified: {
      type: Boolean,
    },
    avatar: {
      type: String,
    },
    twitterId: {
      type: String,
    },

    twitterUsername: {
      type: String,
    },

    twitterProfileImageUrl: {
      type: String,
    },
    twitterConnectedAt: {
      type: Date,
    },
  },
  { timestamps: true },
);

// Plugins
userSchema.plugin(toJSON);
userSchema.plugin(paginate);

export default userSchema;
