import { Connection } from 'mongoose';
import { IRawInfo, IGuild } from '../interfaces';
declare function createRawInfo(connection: Connection, data: IRawInfo): Promise<false | undefined>;
declare const _default: {
    createRawInfo: typeof createRawInfo;
    fetchRawinfo: (connection: Connection, { selectedChannels, period }: IGuild) => Promise<any[]>;
    checkExist: (connection: Connection, time: Date) => Promise<boolean>;
    getRangeId: (connection: Connection) => Promise<any[]>;
};
export default _default;
