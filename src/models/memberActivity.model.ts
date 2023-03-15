import { model } from 'mongoose';
import { MemberActivitySchema } from './schemas';
import { IMemberActivity } from '../interfaces/MemberActivity.interface';

export default model<IMemberActivity>('MemberActivity', MemberActivitySchema);
