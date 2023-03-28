import { Model } from 'mongoose';

export interface IMemberActivity {
  first_end_date: Date;
  all_active?: object;
  all_consistent?: object;
  all_vital?: object;
  all_connected?: object;
  all_paused?: object;
  all_new_disengaged?: object;
  all_disengaged?: object;
  all_unpaused?: object;
  all_returned?: object;
  all_new_active?: object;
  all_still_active?: object;
  all_joined?: object;
  all_dropped?: object;
  all_disengaged_were_newly_active?: object;
  all_disengaged_were_consistenly_active?: object;
  all_disengaged_were_vital?: object;
}

export interface MemberActivityModel extends Model<IMemberActivity> {
  paginate(filter: object, options: object): any;
}
