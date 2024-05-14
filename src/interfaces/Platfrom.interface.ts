import { type Model, type Types } from 'mongoose';
import { type PlatformNames } from '../config/enums';

export interface IPlatform {
  name: PlatformNames;
  community: Types.ObjectId;
  metadata?: Record<string, any>; // dynamic object since structure can change
  disconnectedAt?: Date | null;
  connectedAt?: Date | null;
}

export interface IPlatformUpdateBody {
  name?: PlatformNames;
  community?: Types.ObjectId;
  metadata?: Record<string, any>;
  disconnectedAt?: Date | null;
}

export interface PlatformModel extends Model<IPlatform> {
  paginate: (filter: object, options: object) => any;
}
