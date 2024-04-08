import { type Model, type Types } from 'mongoose';

export interface ICommunityRoles {
  roleType: 'view' | 'admin';
  source: {
    platform: 'discord';
    identifierType: 'member' | 'role';
    identifierValues: any;
    platformId: Types.ObjectId;
  };
}
export interface ICommunity {
  name: string;
  avatarURL?: string;
  users: Types.ObjectId[];
  platforms?: Types.ObjectId[];
  tcaAt?: Date;
  roles?: ICommunityRoles[];
}

export interface ICommunityUpdateBody {
  name?: string;
  avatarURL?: string;
  users?: Types.ObjectId[];
  platforms?: Types.ObjectId[];
  tcaAt?: Date;
  roles?: ICommunityRoles[];
}

export interface CommunityModel extends Model<ICommunity> {
  paginate: (filter: object, options: object) => any;
}
