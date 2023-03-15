import { Schema } from 'mongoose';
import { toJSON, paginate } from './plugins';
import { IMemberActivity, MemberActivityModel } from '../../interfaces/MemberActivity.interface';

const MemberActivitySchema = new Schema<IMemberActivity, MemberActivityModel>({
  lastDate: {
    type: Date,
  },
  activeAccounts: [
    {
      type: String,
    },
  ],
  joinedAccounts: [
    {
      type: String,
    },
  ],
  connectedAccounts: [
    {
      type: String,
    },
  ],
});

// Plugins
MemberActivitySchema.plugin(toJSON);
MemberActivitySchema.plugin(paginate);

export default MemberActivitySchema;
