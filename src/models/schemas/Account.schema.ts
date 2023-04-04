import { Schema } from 'mongoose';
import { toJSON, paginate } from './plugins';
import { IAccount, AccountModel } from '../../interfaces/Account.interface';

const accountSchema = new Schema<IAccount, AccountModel>({
  id: {
    type: String,
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
});

// Plugins
accountSchema.plugin(toJSON);
accountSchema.plugin(paginate);

export default accountSchema;
