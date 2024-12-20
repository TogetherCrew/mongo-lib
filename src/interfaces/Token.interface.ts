import { type Model, type Types } from 'mongoose';
import { type TokenTypeNames } from '../config/enums';

export interface IToken {
  token: string;
  user: Types.ObjectId;
  community?: Types.ObjectId;
  type: TokenTypeNames;
  expires: Date;
  blacklisted?: boolean;
}

export interface ITokenUpdateBody {
  blacklisted?: boolean;
}

export interface TokenModel extends Model<IToken> {
  paginate: (filter: object, options: object) => any;
}
