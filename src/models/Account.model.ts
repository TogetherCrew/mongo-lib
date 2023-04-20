import { model } from 'mongoose';
import { accountSchema } from './schemas';
import { IAccount } from '../interfaces/Account.interface';

export default model<IAccount>('Account', accountSchema);
