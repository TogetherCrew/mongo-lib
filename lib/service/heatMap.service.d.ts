import { Connection } from 'mongoose';
import { IHeatMap } from '../interfaces/HeatMap.interface';
declare function createHeatMap(connection: Connection, data: IHeatMap): Promise<any>;
declare const _default: {
    createHeatMap: typeof createHeatMap;
};
export default _default;
