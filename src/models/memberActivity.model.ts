import { model } from 'mongoose';
import { MemberActivitySchema } from './schemas';
import { IMemberActivity } from '../interfaces';

export default model<IMemberActivity>('MemberActivity', MemberActivitySchema);
