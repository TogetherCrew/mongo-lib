import { Model } from 'mongoose';
import { BaseRepository } from './base.repository';
import { IHeatMap } from '../interfaces';
import HeatMap from '../models/HeatMap.model';

export class HeatMapRepository extends BaseRepository<IHeatMap> {
  constructor(model: Model<IHeatMap> = HeatMap) {
    super(model);
  }
}

export const heatMapRepository = new HeatMapRepository();
export default heatMapRepository;
