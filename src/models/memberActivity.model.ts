import { model } from 'mongoose';
import { MemberActivitySchema } from './schemas';
import { type IMemberActivity } from '../interfaces';

export default model<IMemberActivity>('MemberActivity', MemberActivitySchema);
