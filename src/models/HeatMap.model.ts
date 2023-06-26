import { model } from 'mongoose';
import { heatMapSchema } from './schemas';
import { IHeatMap } from '../interfaces';

export default model<IHeatMap>('HeatMap', heatMapSchema);
