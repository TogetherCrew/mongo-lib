import { Connection } from 'mongoose';
import { IRawInfo } from '../interfaces/RawInfo.interface';
declare function createRawInfo(connection: Connection, data: IRawInfo): Promise<any>;
declare const _default: {
    createRawInfo: typeof createRawInfo;
};
export default _default;
