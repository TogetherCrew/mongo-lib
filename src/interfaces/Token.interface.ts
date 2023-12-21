import { type Model, type Types } from 'mongoose';


export interface IToken {
  token: string;
  user: Types.ObjectId;
  type: string;
  expires: Date;
  blacklisted?: boolean;
}

export interface ITokenUpdateBody {
  blacklisted?: boolean;
}

export interface TokenModel extends Model<IToken> {
  paginate: (filter: object, options: object) => any;
}
