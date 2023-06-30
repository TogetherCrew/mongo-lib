import { type Model } from 'mongoose';

export interface IMemberActivity {
  date: Date;
  all_active?: string[];
  all_consistent?: string[];
  all_vital?: string[];
  all_connected?: string[];
  all_paused?: string[];
  all_new_disengaged?: string[];
  all_disengaged?: string[];
  all_unpaused?: string[];
  all_returned?: string[];
  all_new_active?: string[];
  all_still_active?: string[];
  all_joined?: string[];
  all_dropped?: string[];
  all_disengaged_were_newly_active?: string[];
  all_disengaged_were_consistently_active?: string[];
  all_disengaged_were_vital?: string[];
}

export interface MemberActivityModel extends Model<IMemberActivity> {
  paginate: (filter: object, options: object) => any;
}
