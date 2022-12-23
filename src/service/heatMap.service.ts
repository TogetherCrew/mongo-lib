import { IHeatMap } from '../interfaces/HeatMap.interface';
import { HeatMap } from '../models'
/**
 * Create heatmap
 * @param {IHeatMap} data
 * @returns {Promise<IHeatMap>}
 */
async function createHeatMap(data: IHeatMap) {
    return HeatMap.create(data);
}

export default {
    createHeatMap
}