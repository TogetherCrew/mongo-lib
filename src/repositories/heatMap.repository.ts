import { type Connection } from 'mongoose';

import { type IHeatMap } from '../interfaces';
import { BaseRepository } from './base.repository';

export class HeatMapRepository extends BaseRepository<IHeatMap> {
  constructor(connection: Connection) {
    super(connection.model<IHeatMap>('HeatMap'));
  }
}

export const makeHeatMapRepository = (connection: Connection) => new HeatMapRepository(connection);
