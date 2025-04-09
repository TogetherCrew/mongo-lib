import { Model, Types } from 'mongoose';

import { ModuleNames, PlatformNames } from '../config/enums';

export interface IModule {
  name: ModuleNames;
  community: Types.ObjectId;
  activated: boolean;
  options?: {
    platforms: Array<{
      platform: Types.ObjectId | null;
      name: PlatformNames | null;
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
