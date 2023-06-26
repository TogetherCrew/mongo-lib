import { Connection } from 'mongoose';
import { IHeatMap } from '../interfaces';

/**
 * Create heatmap
 * @param {IHeatMap} data
 * @returns {Promise<IHeatMap>}
 */
async function createHeatMap(connection: Connection, data: IHeatMap) {
  return connection.models.HeatMap.create(data);
}

/**
 * Create heatmaps
 * @param {IHeatMap} heatmaps
 * @returns {Promise<IHeatMap>}
 */
async function createHeatMaps(connection: Connection, heatmaps: IHeatMap[]) {
  return connection.models.HeatMap.insertMany(heatmaps.map((heatmap) => heatmap));
}

export default {
  createHeatMap,
  createHeatMaps,
};
