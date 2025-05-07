import { type Model } from 'mongoose';
import { BaseRepository } from './base.repository';
import { type IPlatform } from '../interfaces';
import Platform from '../models/Platfrom.model';

export class PlatformRepository extends BaseRepository<IPlatform> {
  constructor(model: Model<IPlatform> = Platform) {
    super(model);
  }
}

export const platformRepository = new PlatformRepository();
