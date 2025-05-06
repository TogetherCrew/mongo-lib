import { Model } from 'mongoose';
import { BaseRepository } from './base.repository';
import { IPlatform } from '../interfaces';
import Platform from '../models/Platfrom.model';

export class PlatformRepository extends BaseRepository<IPlatform> {
  constructor(model: Model<IPlatform> = Platform) {
    super(model);
  }
}

export const platformRepository = new PlatformRepository();
export default platformRepository;
