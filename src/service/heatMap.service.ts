/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { type Connection } from 'mongoose';
import { type IHeatMap } from '../interfaces';

/**
 * Create heatmap
 * @param {IHeatMap} data
 * @returns {Promise<IHeatMap>}
 */
async function createHeatMap(connection: Connection, data: IHeatMap) {
  return await connection.models.HeatMap.create(data);
}

/**
 * Create heatmaps
 * @param {IHeatMap} heatmaps
 * @returns {Promise<IHeatMap>}
 */
async function createHeatMaps(connection: Connection, heatmaps: IHeatMap[]) {
  return await connection.models.HeatMap.insertMany(heatmaps.map((heatmap) => heatmap));
}

export default {
  createHeatMap,
  createHeatMaps,
};
