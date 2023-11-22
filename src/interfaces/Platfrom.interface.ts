import { type Model, type Types } from 'mongoose';

export interface IPlatform {
  name: string;
  community: Types.ObjectId;
  metadata?: Record<string, any>; // dynamic object since structure can change
  disconnectedAt?: Date | null;
  isInProgress?: boolean;
  connectedAt?: Date;
}

export interface IPlatformUpdateBody {
  name?: string;
  community?: Types.ObjectId;
  metadata?: Record<string, any>;
  disconnectedAt?: Date | null;
  isInProgress?: boolean;
}

export interface PlatformModel extends Model<IPlatform> {
  paginate: (filter: object, options: object) => any;
}
