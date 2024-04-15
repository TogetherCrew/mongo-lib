import { type Model, type Types } from 'mongoose';

export interface IModule {
  name: 'hivemind';
  community: Types.ObjectId;
  options?: {
    platforms: Array<{
      platform: Types.ObjectId;
      name: 'discord';
      metadata?: Record<string, any>; // dynamic object since structure can change
    }>;
  };
}
export interface IModuleUpdateBody {
  options?: {
    platforms: Array<{
      platform: Types.ObjectId;
      name: 'discord';
      metadata?: Record<string, any>; // dynamic object since structure can change
    }>;
  };
}

export interface ModuleModel extends Model<IModule> {
  paginate: (filter: object, options: object) => any;
}
