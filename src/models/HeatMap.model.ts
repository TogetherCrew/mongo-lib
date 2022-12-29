import { model } from 'mongoose';
import { heatMapSchema } from './schemas';
import { IHeatMapModel } from '../interfaces/HeatMap.interface';

export default model<IHeatMapModel>('HeatMap', heatMapSchema);

