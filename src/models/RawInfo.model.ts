import { model } from 'mongoose';
import { rawInfoSchema } from './schemas';
import { IRawInfo } from '../interfaces/RawInfo.interface';

export default model<IRawInfo>('RawInfo', rawInfoSchema);
