import { type Model, type Types } from 'mongoose';

export interface IPlatform {
  name: 'google' | 'discord' | 'twitter';
  community: Types.ObjectId;
  metadata?: Record<string, any>; // dynamic object since structure can change
  disconnectedAt?: Date | null;
  connectedAt?: Date | null;
}

export interface IPlatformUpdateBody {
  name?: 'google' | 'discord' | 'twitter';
  community?: Types.ObjectId;
  metadata?: Record<string, any>;
  disconnectedAt?: Date | null;
}

export interface PlatformModel extends Model<IPlatform> {
  paginate: (filter: object, options: object) => any;
}
