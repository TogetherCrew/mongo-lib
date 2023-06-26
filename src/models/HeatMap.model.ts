import { model } from 'mongoose';
import { heatMapSchema } from './schemas';
import { type IHeatMap } from '../interfaces';

export default model<IHeatMap>('HeatMap', heatMapSchema);
