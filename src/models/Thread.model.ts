import { model } from 'mongoose';

import { IThread, ThreadModel } from '../interfaces';
import { threadSchema } from './schemas';

export default model<IThread, ThreadModel>('Thread', threadSchema);
