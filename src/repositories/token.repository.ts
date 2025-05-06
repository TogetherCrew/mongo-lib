import { Model } from 'mongoose';
import { BaseRepository } from './base.repository';
import { IToken } from '../interfaces';
import Token from '../models/Token.model';

export class TokenRepository extends BaseRepository<IToken> {
  constructor(model: Model<IToken> = Token) {
    super(model);
  }
}

export const tokenRepository = new TokenRepository();
export default tokenRepository;
