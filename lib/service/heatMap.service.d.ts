import { Connection } from 'mongoose';
import { IHeatMap } from '../interfaces/HeatMap.interface';
declare function createHeatMap(connection: Connection, data: IHeatMap): Promise<any>;
declare function createHeatMaps(connection: Connection, heatmaps: IHeatMap[]): Promise<any[]>;
declare const _default: {
    createHeatMap: typeof createHeatMap;
    createHeatMaps: typeof createHeatMaps;
};
export default _default;
