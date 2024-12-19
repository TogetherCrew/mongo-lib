import { Schema } from 'mongoose';
import { toJSON } from './plugins';
import { type IToken } from '../../interfaces';
import { TokenTypeNames } from '../../config/enums';

const tokenSchema = new Schema<IToken>(
  {
    token: {
      type: String,
      required: true,
      index: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    community: {
      type: Schema.Types.ObjectId,
      ref: 'Community',
    },
    type: {
      type: String,
      enum: Object.values(TokenTypeNames),
      required: true,
    },
    expires: {
      type: Date,
      required: true,
    },
    blacklisted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

// Plugins
tokenSchema.plugin(toJSON);

export default tokenSchema;
