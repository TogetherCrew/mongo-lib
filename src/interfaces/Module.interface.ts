import { type Model, type Types } from 'mongoose';
import { type PlatformNames, type ModuleNames } from '../config/enums';

export interface IModule {
  name: ModuleNames;
  community: Types.ObjectId;
  options?: {
    platforms: Array<{
      platform: Types.ObjectId;
      name: PlatformNames;
      metadata?: Record<string, any>; // dynamic object since structure can change
    }>;
  };
}
export interface IModuleUpdateBody {
  options?: {
    platforms: Array<{
      platform: Types.ObjectId;
      name: PlatformNames;
      metadata?: Record<string, any>; // dynamic object since structure can change
    }>;
  };
}

export interface ModuleModel extends Model<IModule> {
  paginate: (filter: object, options: object) => any;
}
