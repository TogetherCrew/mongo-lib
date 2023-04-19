import { Schema } from 'mongoose';
import { toJSON } from './plugins';
import { IAccount, AccountModel } from '../../interfaces/Account.interface';

const accountSchema = new Schema<IAccount, AccountModel>({
  accountId: {
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

export default accountSchema;
