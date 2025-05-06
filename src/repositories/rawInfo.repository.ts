import { Model } from 'mongoose';
import { BaseRepository } from './base.repository';
import { IRawInfo } from '../interfaces';
import RawInfo from '../models/RawInfo.model';

export class RawInfoRepository extends BaseRepository<IRawInfo> {
  constructor(model: Model<IRawInfo> = RawInfo) {
    super(model);
  }
}

export const rawInfoRepository = new RawInfoRepository();
export default rawInfoRepository;
