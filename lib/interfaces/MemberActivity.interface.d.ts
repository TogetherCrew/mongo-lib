import { Model } from 'mongoose';
export interface IMemberActivity {
    date: Date;
    all_active?: Array<string>;
    all_consistent?: Array<string>;
    all_vital?: Array<string>;
    all_connected?: Array<string>;
    all_paused?: Array<string>;
    all_new_disengaged?: Array<string>;
    all_disengaged?: Array<string>;
    all_unpaused?: Array<string>;
    all_returned?: Array<string>;
    all_new_active?: Array<string>;
    all_still_active?: Array<string>;
    all_joined?: Array<string>;
    all_dropped?: Array<string>;
    all_disengaged_were_newly_active?: Array<string>;
    all_disengaged_were_consistenly_active?: Array<string>;
    all_disengaged_were_vital?: Array<string>;
}
export interface MemberActivityModel extends Model<IMemberActivity> {
    paginate(filter: object, options: object): any;
}
