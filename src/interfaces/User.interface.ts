import { type Model, type Types } from 'mongoose';
import { type PlatformNames } from '../config/enums';

export interface IIdentity {
  provider: PlatformNames;
  id: string;
}

export interface IUser {
  identities: IIdentity[];
  communities?: Types.ObjectId[];
  tcaAt?: Date;
}

export interface IUserUpdateBody {
  identities?: IIdentity[];
  communities?: Types.ObjectId[];
  tcaAt?: Date;
}

export interface UserModel extends Model<IUser> {
  paginate: (filter: object, options: object) => Promise<any>;
}
