import { Model } from 'mongoose';

export interface IMemberActivity {
    lastDate: Date,
    activeAccounts?: Array<string>,
    joinedAccounts?: Array<string>,
    connectedAccounts?: Array<string>,
}

export interface MemberActivityModel extends Model<IMemberActivity> {
    paginate(filter: object, options: object): any
}


