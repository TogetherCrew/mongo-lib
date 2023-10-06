import { type Model, type Types } from 'mongoose';

export interface ICommunity {
  name: string;
  avatarURL?: string;
  users: Types.ObjectId[];
  platforms?: Types.ObjectId[];
}

export interface ICommunityUpdateBody {
  name?: string;
  avatarURL?: string;
  users?: Types.ObjectId[];
  platforms?: Types.ObjectId[];
}

export interface CommunityModel extends Model<ICommunity> {
  paginate: (filter: object, options: object) => any;
}
