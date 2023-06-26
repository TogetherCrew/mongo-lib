import { Schema } from 'mongoose';
import { toJSON, paginate } from './plugins';
import { type IMemberActivity, type MemberActivityModel } from '../../interfaces';

const MemberActivitySchema = new Schema<IMemberActivity, MemberActivityModel>({
  date: {
    type: Date,
  },
  all_active: [
    {
      type: String,
    },
  ],
  all_consistent: [
    {
      type: String,
    },
  ],
  all_vital: [
    {
      type: String,
    },
  ],
  all_connected: [
    {
      type: String,
    },
  ],
  all_paused: [
    {
      type: String,
    },
  ],
  all_new_disengaged: [
    {
      type: String,
    },
  ],
  all_disengaged: [
    {
      type: String,
    },
  ],
  all_unpaused: [
    {
      type: String,
    },
  ],
  all_returned: [
    {
      type: String,
    },
  ],
  all_new_active: [
    {
      type: String,
    },
  ],
  all_still_active: [
    {
      type: String,
    },
  ],
  all_dropped: [
    {
      type: String,
    },
  ],
  all_joined: [
    {
      type: String,
    },
  ],
  all_disengaged_were_newly_active: [
    {
      type: String,
    },
  ],
  all_disengaged_were_consistenly_active: [
    {
      type: String,
    },
  ],
  all_disengaged_were_vital: [
    {
      type: String,
    },
  ],
});

// Plugins
MemberActivitySchema.plugin(toJSON);
MemberActivitySchema.plugin(paginate);

export default MemberActivitySchema;
