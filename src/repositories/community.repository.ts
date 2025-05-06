import { Model } from 'mongoose';
import { BaseRepository } from './base.repository';
import { ICommunity } from '../interfaces';
import Community from '../models/Community.model';

export class CommunityRepository extends BaseRepository<ICommunity> {
  constructor(model: Model<ICommunity> = Community) {
    super(model);
  }
}

export const communityRepository = new CommunityRepository();
export default communityRepository;
