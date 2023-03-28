import { Schema } from 'mongoose';
import { toJSON, paginate } from './plugins';
import { IMemberActivity, MemberActivityModel } from '../../interfaces/MemberActivity.interface';

const MemberActivitySchema = new Schema<IMemberActivity, MemberActivityModel>({
  first_end_date: {
    type: Date,
  },
  all_active: {
    type: Object,
  },
  all_consistent: {
    type: Object,
  },
  all_vital: {
    type: Object,
  },
  all_connected: {
    type: Object,
  },
  all_paused: {
    type: Object,
  },
  all_new_disengaged: {
    type: Object,
  },
  all_disengaged: {
    type: Object,
  },
  all_unpaused: {
    type: Object,
  },
  all_returned: {
    type: Object,
  },
  all_new_active: {
    type: Object,
  },
  all_still_active: {
    type: Object,
  },
  all_dropped: {
    type: Object,
  },
  all_joined: {
    type: Object,
  },
  all_disengaged_were_newly_active: {
    type: Object,
  },
  all_disengaged_were_consistenly_active: {
    type: Object,
  },
  all_disengaged_were_vital: {
    type: Object,
  },
});

// Plugins
MemberActivitySchema.plugin(toJSON);
MemberActivitySchema.plugin(paginate);

export default MemberActivitySchema;
