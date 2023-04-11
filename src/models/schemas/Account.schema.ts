import { Schema } from 'mongoose';
import { toJSON } from './plugins';
import { IAccount, AccountModel } from '../../interfaces/Account.interface';
import mongooseUniqueValidator from 'mongoose-unique-validator';

const accountSchema = new Schema<IAccount, AccountModel>({
  id: {
    type: String,
    unique: true,
  },
  account: {
    type: String,
  },
  roles: [
    {
      type: String,
    },
  ],
  joinDate: {
    type: Date,
  },
  joinedChannel: {
    type: String
  }
});

// Plugins
accountSchema.plugin(toJSON);
accountSchema.plugin(mongooseUniqueValidator);

export default accountSchema;
