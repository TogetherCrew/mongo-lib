import { model } from 'mongoose';
import { heatMapSchema } from './schemas';
import { IHeatMap } from '../interfaces/HeatMap.interface';

export default model<IHeatMap>('HeatMap', heatMapSchema);
