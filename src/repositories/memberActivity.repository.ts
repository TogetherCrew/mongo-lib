import { Model } from 'mongoose';
import { BaseRepository } from './base.repository';
import { IMemberActivity } from '../interfaces';
import MemberActivity from '../models/memberActivity.model';

export class MemberActivityRepository extends BaseRepository<IMemberActivity> {
  constructor(model: Model<IMemberActivity> = MemberActivity) {
    super(model);
  }
}

export const memberActivityRepository = new MemberActivityRepository();
export default memberActivityRepository;
