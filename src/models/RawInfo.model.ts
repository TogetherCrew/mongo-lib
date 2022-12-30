import { model } from 'mongoose';
import { rawInfoSchema } from './schemas';
import { IRawInfoModel } from '../interfaces/RawInfo.interface';

export default model<IRawInfoModel>('RawInfo', rawInfoSchema);

