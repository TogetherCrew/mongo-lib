import { Model } from 'mongoose';

export interface IMemberActivity {
    lastDate: Date,
    activeAccounts?: string,
    joinedAccounts?: string,
    connectedAccounts?: string,
}

export interface MemberActivityModel extends Model<IMemberActivity> {
    paginate(filter: object, options: object): any
}


